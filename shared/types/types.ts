export interface CandidateData {
  designation: string;
  id: number;
  name: string;
  email: string;
  mobile: string;
  location: string;
  profile_summary: string;
  updated_at: string;
  created_at: string;
}

export interface Education {
  user_id: number;
  degree: string;
  specialization: string;
  institution: string;
  start_date: string;
  end_date: string | null;
}

export interface WorkExperience {
  user_id: number;
  role: string;
  company: string;
  start_date: string;
  end_date: string | null;
  responsibilities: string;
}

export interface Certification {
  user_id: number;
  certificate: string;
  institution: string;
  date: string;
}

export interface Project {
  user_id: number;
  project_name: string;
  type: string;
  url: string;
}

export interface Skill {
  user_id: number;
  skill: string;
}

export interface Technology {
  user_id: number;
  technology: string;
}
