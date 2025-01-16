import mysql from "mysql2/promise"; // Import MySQL with Promise support
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  // Ensure your environment variables are set correctly
  if (
    !process.env.MYSQL_HOST ||
    !process.env.MYSQL_USER ||
    !process.env.MYSQL_DATABASE
  ) {
    throw new Error(
      "MySQL configuration environment variables are not defined"
    );
  }

  try {
    const userData = await req.json(); // Parse the incoming JSON request body
    console.log("Received user data:", userData); // Log the data for debugging

    // Destructure user data from the request body
    const {
      userId,
      userFullName,
      userEmail,
      userFirstName,
      userLastName,
      userProfilePicture,
    } = userData;

    // Establish a connection to MySQL database
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });

    // SQL query to insert data into the 'users' table
    const query = `
      INSERT INTO users (clerk_id, full_name, email, first_name, last_name, profile_picture)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    // Execute the query and insert the data into the MySQL database
    const [result] = await connection.execute(query, [
      userId,
      userFullName,
      userEmail,
      userFirstName,
      userLastName,
      userProfilePicture,
    ]);

    // Close the database connection
    await connection.end();

    // Return a successful response with the result
    return NextResponse.json(
      { message: "User data saved successfully", result },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during API request:", error); // Log the error that occurred
    return NextResponse.json(
      { message: error || "Server error" },
      { status: 500 }
    );
  }
};
