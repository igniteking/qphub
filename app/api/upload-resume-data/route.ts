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
    console.log(jsonData);

    // Helper function to handle undefined and "not found" values
    const safeValue = (value: any) => {
      return value === undefined || value === "not found" ? null : value;
    };

    try {
      // Insert into Users table
      const [userResult] = await connection.execute(
        `INSERT INTO candidate_data (name, email, mobile, location, profile_summary)
     VALUES (?, ?, ?, ?, ?)`,
        [
          jsonData.Name,
          safeValue(jsonData.ContactInformation?.Email),
          safeValue(jsonData.ContactInformation?.Mobile),
          safeValue(jsonData.ContactInformation?.Location),
          safeValue(jsonData.Profile),
        ]
      );

      // `userResult` will be a `ResultSetHeader` with insertId
      const userId = (userResult as mysql.ResultSetHeader).insertId;

      // Insert into Education table
      for (const edu of jsonData.Education) {
        await connection.execute(
          `INSERT INTO education (user_id, degree, specialization, institution, start_date, end_date)
       VALUES (?, ?, ?, ?, ?, ?)`,
          [
            userId,
            safeValue(edu.Degree),
            null, // Specialization not provided in JSON
            safeValue(edu.Institution),
            safeValue(edu.StartDate),
            edu.EndDate === "Present" ? null : safeValue(edu.EndDate),
          ]
        );
      }

      // Insert into WorkExperience table
      for (const work of jsonData.WorkExperience) {
        // Check if Responsibilities is an array, join it if so
        const responsibilities = Array.isArray(work.Responsibilities)
          ? work.Responsibilities.join(", ")
          : safeValue(work.Responsibilities);

        await connection.execute(
          `INSERT INTO work_experience (user_id, role, company, start_date, end_date, responsibilities)
       VALUES (?, ?, ?, ?, ?, ?)`,
          [
            userId,
            safeValue(work.Role),
            safeValue(work.Company),
            safeValue(work.StartDate),
            work.EndDate === "Present" ? null : safeValue(work.EndDate),
            responsibilities, // Insert the joined responsibilities or the single string
          ]
        );
      }

      // Insert into Certifications table
      if (jsonData.Certifications !== "not found") {
        for (const cert of jsonData.Certifications) {
          await connection.execute(
            `INSERT INTO certifications (user_id, certificate, institution, date)
       VALUES (?, ?, ?, ?)`,
            [
              userId,
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
            `INSERT INTO projects (user_id, project_name, type, url)
       VALUES (?, ?, ?, ?)`,
            [
              userId,
              safeValue(project.ProjectName),
              safeValue(project.Type),
              safeValue(project.URL),
            ]
          );
        }
      }

      // Insert into Skills table
      for (const skill of jsonData.KeySkills) {
        await connection.execute(
          `INSERT INTO skills (user_id, skill)
       VALUES (?, ?)`,
          [userId, safeValue(skill)]
        );
      }

      // Insert into Technologies table
      if (jsonData.Technologies !== "not found") {
        for (const tech of jsonData.Technologies) {
          await connection.execute(
            `INSERT INTO technologies (user_id, technology)
       VALUES (?, ?)`,
            [userId, safeValue(tech)]
          );
        }
      }

      return NextResponse.json(
        { message: "Data inserted successfully!" },
        { status: 200 }
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Failed to insert data into the database." },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
  }
};
