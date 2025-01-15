import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
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

    // Initialize the Neon client with the database URL
    const sql = neon(process.env.DATABASE_URL);

    // Define the values to insert into the 'users' table
    const values = [
      userId,
      userFullName,
      userEmail,
      userFirstName,
      userLastName,
      userProfilePicture,
    ];

    // SQL query to insert data into the 'users' table
    const query = `
      INSERT INTO users (clerk_id, full_name, email, first_name, last_name, profile_picture)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;

    // Execute the query and return the result
    const result = await sql(query, values);

    // Return a successful response with the result
    return NextResponse.json(
      { message: "User data saved successfully", result: result },
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
