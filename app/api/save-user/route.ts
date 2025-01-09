import { executeQuery } from "@/lib/db";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
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

    // SQL query to insert data into the 'users' table
    const query = `
      INSERT INTO users (clerk_id, full_name, email, first_name, last_name, profile_picture)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    // Values to insert into the database
    const values = [
      userId,
      userFullName,
      userEmail,
      userFirstName,
      userLastName,
      userProfilePicture,
    ];

    // Execute the query and return a response
    const result = await executeQuery(query, values);

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
