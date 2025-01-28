"use client";
import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import ToastNotification from "@/components/ToastNotification";

const CopyPrompt = () => {
  const [isCopied, setIsCopied] = useState(false);
  const textToCopy = `Here is the final prompt with the addition of the **"Designation"** field. The field has been integrated into the JSON structure and instructions for extracting it are included:

---

**Prompt:**

You are an advanced information extraction system. Your task is to extract all possible details from a given resume or CV and organize them into the following JSON structure. For any missing details or sections, you must explicitly set the value to "null". Preserve the exact formatting and adhere to the structure below:

**JSON Structure:**

json
{
  "Name": "null",
  "Designation": "null",
  "ContactInformation": {
    "Mobile": "null",
    "Email": "null",
    "Location": "null",
    "LinkedIn": "null",
    "GitHub": "null"
  },
  "Profile": "null",
  "Education": [
    {
      "Degree": "null",
      "Institution": "null",
      "StartDate": "null",
      "EndDate": "null"
    }
  ],
  "WorkExperience": [
    {
      "Role": "null",
      "Company": "null",
      "StartDate": "null",
      "EndDate": "null",
      "Responsibilities": [
        "null"
      ]
    }
  ],
  "Certifications": [
    {
      "Certificate": "null",
      "Institution": "null",
      "Date": "null"
    }
  ],
  "Languages": ["null"],
  "KeySkills": ["null"],
  "Technologies": ["null"],
  "Projects": [
    {
      "ProjectName": "null",
      "Type": "null",
      "URL": "null"
    }
  ]
}

### Extraction Guidelines:

1. Extract the **Name** field from the header or contact section.
2. Retrieve the **Designation** field (e.g., "Web Developer," "Software Engineer") from the header, summary, or work experience sections. If unavailable, set it to "null".
3. In **ContactInformation**, retrieve:
   - **Mobile** number from the phone section.
   - **Email** address from the email section.
   - **Location**, **LinkedIn**, and **GitHub** details if available.
4. Extract the **Profile** or summary section as-is, or set "null" if unavailable.
5. For **Education**, ensure every degree is included with the institution name, start date, and end date. If unavailable, fill fields with "null".
6. In **WorkExperience**, include all listed roles, companies, start/end dates, and responsibilities. Set "null" for any missing details or fields.
7. For **Certifications**, retrieve certificate name, institution, and date. If no certificates are found, return a single object with all fields as "null".
8. List all **Languages** in the provided order. If no languages are listed, return ["null"].
9. Include all **KeySkills** and **Technologies** as separate arrays. If missing, return ["null"].
10. Extract **Projects**, including project name, type, and URL. If no projects are mentioned, return a single project object with all fields as "null".

---

### Important Rules:
- Ensure 100% accuracy for all extracted fields.
- Return "null" for any field or section not explicitly found in the resume/CV.
- Maintain strict adherence to the given JSON structure.

---

This comprehensive prompt ensures precise extraction while accounting for the new **Designation** field and handling missing data gracefully.`;

  const handleCopy = async () => {
    try {
      setIsCopied(false);
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };
  return (
    <>
      <ToastNotification
        setShow={setIsCopied}
        show={isCopied}
        message="Prompt copied to clipboard"
      />
      <Button
        onClick={handleCopy}
        variant="outline-primary"
        className="btn btn-outline-primary btn-md btn-wave no-caret"
      >
        <i className="bi bi-clipboard"></i> Copy Prompt
      </Button>
    </>
  );
};

export default CopyPrompt;
