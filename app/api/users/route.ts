import { NextResponse } from "next/server";
import { executeQuery } from "@/lib/db"; // Your database helper function

export async function POST(request: Request) {
  try {
    // Parse the incoming request body
    const { userEmail, userFirstName, userLastName, userProfilePicture } =
      await request.json();

    // Insert user data into your database (ensure correct data types are passed)
    const result = await executeQuery(
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
      { message: "Error saving user data", error: error.message },
      { status: 500 }
    );
  }
}
