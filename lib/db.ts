import mysql, { Connection, Pool } from "mysql2/promise";

let pool: Pool;

export const initDB = () => {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST || "localhost", // Change as per your setup
      user: process.env.DB_USER || "root",
      password: process.env.DB_PASSWORD || "",
      database: process.env.DB_NAME || "zazla",
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });
  }
  return pool;
};

export const executeQuery = async <
  T extends mysql.RowDataPacket[] | mysql.OkPacket
>(
  query: string,
  values?: any[]
): Promise<T> => {
  const connection = initDB();
  const [results] = await connection.execute<T>(query, values);
  return results;
};
