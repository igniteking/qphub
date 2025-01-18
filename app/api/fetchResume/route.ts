// app/api/fetchResume/route.ts
import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";
import {
  CandidateData,
  Education,
  WorkExperience,
  Certification,
  Project,
  Skill,
  Technology,
} from "@/shared/types/types";
import { getAuth } from "@clerk/nextjs/server";

type ResumeData = {
  candidateData: CandidateData[];
  education: Education[];
  workExperience: WorkExperience[];
  certifications: Certification[];
  projects: Project[];
  skills: Skill[];
  technologies: Technology[];
};

export async function GET(req: NextRequest) {
  let connection;
  try {
    connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    });

    const { userId: authUserId } = getAuth(req); // Get userId from the request

    // Fetch logged user ID
    const [loggedUserResults] = await connection.execute(
      "SELECT id FROM users WHERE clerk_id = ?",
      [authUserId]
    );

    const loggedUserId = (loggedUserResults as mysql.RowDataPacket[])[0]?.id;
    if (!loggedUserId) {
      console.error("Logged User ID is undefined or null");
      return NextResponse.json(
        { error: "Logged User ID not found" },
        { status: 400 }
      );
    }
    console.log("Logged User ID:", loggedUserId);

    // Query candidate ID
    const [candidateIdResults] = await connection.query(
      "SELECT candidate_id FROM resume_json_code WHERE uploaded_by_user_id = ?",
      [loggedUserId]
    );

    const candidateId = (candidateIdResults as mysql.RowDataPacket[])[0]?.candidate_id;
    if (!candidateId) {
      console.error("Candidate ID is undefined or null");
      return NextResponse.json(
        { error: "Candidate ID not found" },
        { status: 400 }
      );
    }
    console.log("Candidate ID:", candidateId);

    // Query the candidate data and related information
    const [candidateDataResults] = await connection.query(
      "SELECT * FROM candidate_data WHERE id = ?",
      [candidateId]
    );
    const [educationResults] = await connection.query(
      "SELECT * FROM education WHERE candidate_id = ?",
      [candidateId]
    );
    const [workExperienceResults] = await connection.query(
      "SELECT * FROM work_experience WHERE candidate_id = ?",
      [candidateId]
    );
    const [certificationsResults] = await connection.query(
      "SELECT * FROM certifications WHERE candidate_id = ?",
      [candidateId]
    );
    const [projectsResults] = await connection.query(
      "SELECT * FROM projects WHERE candidate_id = ?",
      [candidateId]
    );
    const [skillsResults] = await connection.query(
      "SELECT * FROM skills WHERE candidate_id = ?",
      [candidateId]
    );
    const [technologiesResults] = await connection.query(
      "SELECT * FROM technologies WHERE candidate_id = ?",
      [candidateId]
    );

    const resumeData: ResumeData = {
      candidateData: candidateDataResults as CandidateData[],
      education: educationResults as Education[],
      workExperience: workExperienceResults as WorkExperience[],
      certifications: certificationsResults as Certification[],
      projects: projectsResults as Project[],
      skills: skillsResults as Skill[],
      technologies: technologiesResults as Technology[],
    };

    return NextResponse.json(resumeData);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  } finally {
    if (connection) {
      await connection.end(); // Ensure the connection is closed after all queries
    }
  }
}
