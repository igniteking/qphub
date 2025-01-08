import mysql from "mysql2/promise";

// Create a connection pool to your MySQL database
const pool = mysql.createPool({
  host: "localhost", // Your MySQL host
  user: "root", // Your MySQL user
  password: "", // Your MySQL password
  database: "zazla", // Replace with your actual database name
});

// Execute a query
export const executeQuery = async <T = any>(
  query: string,
  values?: any[]
): Promise<T> => {
  const [results] = await pool.execute(query, values);
  return results as T;
};
