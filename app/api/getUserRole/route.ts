// app/api/getUserRole/route.ts

import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const clerk_id = searchParams.get("clerk_id"); // Retrieve clerk_id from query

  if (!clerk_id) {
    return NextResponse.json(
      { error: "clerk_id is required" },
      { status: 400 }
    );
  }

  try {
    // Establish connection to the database
    const connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });

    // Query to get user role based on clerk_id
    const [rows] = await connection.execute(
      "SELECT role FROM users WHERE clerk_id = ?",
      [clerk_id]
    );

    // Check if user exists
    if (rows.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const userRole = rows[0].role;

    // Return the role of the user
    return NextResponse.json({ role: userRole }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error fetching user role" },
      { status: 500 }
    );
  }
}
