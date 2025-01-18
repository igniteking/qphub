import { NextApiRequest, NextApiResponse } from "next";
import mysql, { RowDataPacket } from "mysql2/promise";
import {
  CandidateData,
  Education,
  WorkExperience,
  Certification,
  Skill,
  Technology,
} from "@/shared/types/types";
import { Project } from "next/dist/build/swc";
// Define the types for the data returned from each table

type ResumeData = {
  candidateData: CandidateData[];
  education: Education[];
  workExperience: WorkExperience[];
  certifications: Certification[];
  projects: Project[];
  skills: Skill[];
  technologies: Technology[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // MySQL connection configuration
  const dbConfig = {
    host: process.env.MYSQL_HOST || "localhost",
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_PASSWORD || "password",
    database: process.env.MYSQL_DATABASE || "resume_db",
  };

  try {
    const connection = await mysql.createConnection(dbConfig);

    // Fetch data from all tables
    const [candidateData] = await connection.query<RowDataPacket[]>(
      `SELECT * FROM candidate_data`
    );

    const [education] = await connection.query<RowDataPacket[]>(
      `SELECT * FROM education`
    );

    const [workExperience] = await connection.query<RowDataPacket[]>(
      `SELECT * FROM work_experience`
    );

    const [certifications] = await connection.query<RowDataPacket[]>(
      `SELECT * FROM certifications`
    );

    const [projects] = await connection.query<RowDataPacket[]>(
      `SELECT * FROM projects`
    );

    const [skills] = await connection.query<RowDataPacket[]>(
      `SELECT * FROM skills`
    );

    const [technologies] = await connection.query<RowDataPacket[]>(
      `SELECT * FROM technologies`
    );

    await connection.end();

    // Combine all data into a single object and cast to your types
    const resumeData: ResumeData = {
      candidateData: candidateData as CandidateData[],
      education: education as Education[],
      workExperience: workExperience as WorkExperience[],
      certifications: certifications as Certification[],
      projects: projects as Project[],
      skills: skills as Skill[],
      technologies: technologies as Technology[],
    };

    return res.status(200).json(resumeData);
  } catch (error) {
    console.error("Database error:", error);
    return res.status(500).json({ error: "Failed to fetch data" });
  }
}
