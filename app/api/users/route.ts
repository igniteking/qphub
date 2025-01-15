import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }
  try {
    // Parse the incoming request body
    const { userEmail, userFirstName, userLastName, userProfilePicture } =
      await request.json();
    const sql = neon(process.env.DATABASE_URL);
    // Insert user data into your database (ensure correct data types are passed)
    const result = await sql(
      "INSERT INTO users (email, first_name, last_name, profile_picture) VALUES (?, ?, ?, ?)",
      [
        userEmail[0]?.emailAddress, // Ensure you're sending a valid email address (check if it's an array of objects)
        userFirstName,
        userLastName,
        userProfilePicture || null, // Ensure null is passed if no image
      ]
    );

    // Return a success message and the result of the insert operation
    return NextResponse.json({
      message: "User data saved successfully",
      result: result,
    });
  } catch (error) {
    console.error("Error storing user data:", error);
    return NextResponse.json(
      { message: "Error saving user data", error: error },
      { status: 500 }
    );
  }
}
