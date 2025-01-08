import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2/promise";

// Database connection configuration
const dbConfig = {
  host: "localhost", // Replace with your database host
  user: "root", // Replace with your database username
  password: "", // Replace with your database password
  database: "zazla", // Replace with your database name
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  try {
    // Create a connection to the database
    const connection = await mysql.createConnection(dbConfig);

    // Query the database
    const [rows] = await connection.execute("SELECT * FROM users");

    // Close the connection
    await connection.end();

    // Return the data as JSON
    return res.status(200).json(rows);
  } catch (error: any) {
    console.error("Database query error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default handler;
