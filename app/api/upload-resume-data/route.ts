import { getAuth } from "@clerk/nextjs/server";
import mysql from "mysql2/promise"; // Import MySQL with Promise support
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  // Check for the necessary environment variables
  if (
    !process.env.MYSQL_HOST ||
    !process.env.MYSQL_USER ||
    !process.env.MYSQL_DATABASE
  ) {
    return NextResponse.json(
      { error: "MySQL configuration environment variables are not defined" },
      { status: 500 }
    );
  }

  // Check that the request method is POST
  if (req.method === "POST") {
    // Establish a connection to the MySQL database
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });

    // Parse the request body as JSON
    const jsonData = await req.json();

    // Log to see the structure of the incoming JSON data
    console.log("Parsed JSON Data:", jsonData);

    // Helper function to handle undefined and "not found" values
    const safeValue = (value: any) => {
      return value === undefined || value === "not found" ? null : value;
    };

    // Begin a transaction to ensure all queries run together
    await connection.beginTransaction();

    try {
      const { userId: authUserId } = getAuth(req); // Get userId from the request

      // Fetch logged user ID
      const [loggedUserResults] = await connection.execute(
        "SELECT id FROM users WHERE clerk_id = ?",
        [authUserId]
      );

      // Ensure we have a valid logged_user_id
      const loggedUserId = (loggedUserResults as any[])[0]?.id;
      if (!loggedUserId) {
        console.error("Logged User ID is undefined or null");
        return NextResponse.json(
          { error: "Logged User ID not found" },
          { status: 400 }
        );
      }

      const userId = loggedUserId; // Assuming userId is the loggedUserId

      // Insert into candidate_data table
      const [candidateResult] = await connection.execute(
        `INSERT INTO candidate_data (name, email, mobile, location, profile_summary)
         VALUES (?, ?, ?, ?, ?)`,
        [
          safeValue(jsonData.Name), // Mapped to 'name'
          safeValue(jsonData.ContactInformation?.Email), // Mapped to 'email'
          safeValue(jsonData.ContactInformation?.Mobile), // Mapped to 'mobile'
          safeValue(jsonData.ContactInformation?.Location), // Mapped to 'location'
          safeValue(jsonData.Profile), // Mapped to 'profile_summary'
        ]
      );

      // Get the user ID from the last inserted row in candidate_data
      const insertedUserId = (candidateResult as mysql.ResultSetHeader)
        .insertId;
      if (!insertedUserId) {
        console.error("Failed to retrieve inserted user ID");
        return NextResponse.json(
          { error: "Failed to retrieve inserted user ID" },
          { status: 500 }
        );
      }

      console.log("Inserted user ID:", insertedUserId);

      // Prepare jsonData
      const safeJsonData = safeValue(JSON.stringify(jsonData));
      if (!jsonData) {
        console.error("JSON Data is invalid");
        return NextResponse.json(
          { error: "Invalid JSON Data" },
          { status: 400 }
        );
      }

      // Insert into resume_json_code table
      const [jsonResult] = await connection.execute(
        `INSERT INTO resume_json_code (uploaded_by_user_id, candidate_id, json_code)
         VALUES (?, ?, ?)`,
        [loggedUserId ?? null, insertedUserId ?? null, safeJsonData ?? null]
      );

      console.log("Insert into resume_json_code result:", jsonResult);

      // Insert into Education table
      if (jsonData.Education) {
        for (const edu of jsonData.Education) {
          await connection.execute(
            `INSERT INTO education (candidate_id, degree, specialization, institution, start_date, end_date)
             VALUES (?, ?, ?, ?, ?, ?)`,
            [
              insertedUserId,
              safeValue(edu.Degree),
              null, // Specialization not provided in JSON
              safeValue(edu.Institution),
              safeValue(edu.StartDate),
              edu.EndDate === "Present" ? null : safeValue(edu.EndDate),
            ]
          );
        }
      }

      // Insert into WorkExperience table
      if (jsonData.WorkExperience) {
        for (const work of jsonData.WorkExperience) {
          const responsibilities = Array.isArray(work.Responsibilities)
            ? work.Responsibilities.join(", ")
            : safeValue(work.Responsibilities);

          await connection.execute(
            `INSERT INTO work_experience (candidate_id, role, company, start_date, end_date, responsibilities)
             VALUES (?, ?, ?, ?, ?, ?)`,
            [
              insertedUserId,
              safeValue(work.Role),
              safeValue(work.Company),
              safeValue(work.StartDate),
              work.EndDate === "Present" ? null : safeValue(work.EndDate),
              responsibilities, // Insert the joined responsibilities or the single string
            ]
          );
        }
      }

      // Insert into Certifications table
      if (jsonData.Certifications !== "not found") {
        for (const cert of jsonData.Certifications) {
          await connection.execute(
            `INSERT INTO certifications (candidate_id, certificate, institution, date)
             VALUES (?, ?, ?, ?)`,
            [
              insertedUserId,
              safeValue(cert.Certificate),
              safeValue(cert.Institution),
              safeValue(cert.Date),
            ]
          );
        }
      }

      // Insert into Projects table
      if (jsonData.Projects !== "not found") {
        for (const project of jsonData.Projects) {
          await connection.execute(
            `INSERT INTO projects (candidate_id, project_name, type, url)
             VALUES (?, ?, ?, ?)`,
            [
              insertedUserId,
              safeValue(project.ProjectName),
              safeValue(project.Type),
              safeValue(project.URL),
            ]
          );
        }
      }

      // Insert into Skills table
      if (jsonData.KeySkills) {
        for (const skill of jsonData.KeySkills) {
          await connection.execute(
            `INSERT INTO skills (candidate_id, skill)
             VALUES (?, ?)`,

            [insertedUserId, safeValue(skill)]
          );
        }
      }

      // Insert into Technologies table
      if (jsonData.Technologies !== "not found") {
        for (const tech of jsonData.Technologies) {
          await connection.execute(
            `INSERT INTO technologies (candidate_id, technology)
             VALUES (?, ?)`,
            [insertedUserId, safeValue(tech)]
          );
        }
      }

      // Commit the transaction
      await connection.commit();

      return NextResponse.json(
        { message: "Data inserted successfully!" },
        { status: 200 }
      );
    } catch (error) {
      // Rollback transaction in case of error
      await connection.rollback();

      console.error("Error during database operation:", error);
      return NextResponse.json(
        { error: "Failed to insert data into the database." },
        { status: 500 }
      );
    } finally {
      // Close the database connection
      await connection.end();
    }
  } else {
    return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
  }
};
