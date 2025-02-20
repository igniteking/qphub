<?php

// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

include('connections/connection.php');

header('Content-Type: application/json');

$connection = new mysqli($MYSQL_HOST, $MYSQL_USER, $MYSQL_PASSWORD, $MYSQL_DATABASE);

if ($connection->connect_error) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed: ' . $connection->connect_error]);
    exit;
}

$inputData = json_decode(file_get_contents("php://input"), true);

if (!isset($inputData['candidate_name']) || empty(trim($inputData['candidate_name']))) {
    http_response_code(400);
    echo json_encode(['error' => 'Candidate name is required for searching.']);
    exit;
}

$candidateName = "%" . trim($inputData['candidate_name']) . "%";
$location = isset($inputData['location']) ? "%" . trim($inputData['location']) . "%" : "%";
$designation = isset($inputData['designation']) ? "%" . trim($inputData['designation']) . "%" : "%";

try {
    $stmt = $connection->prepare("
        SELECT 
            c.id, 
            c.name, 
            c.email, 
            c.mobile, 
            c.location, 
            c.profile_summary, 
            c.designation, 
            c.resume_file,
            c.nationality,
            c.year_of_experience,
            c.languages_known,
            (SELECT e.degree FROM education e WHERE e.candidate_id = c.id ORDER BY FIELD(e.degree, 'PhD', 'Master', 'Bachelor', 'Diploma', 'High School') LIMIT 1) AS highest_degree,
            (SELECT GROUP_CONCAT(s.skill) FROM skills s WHERE s.candidate_id = c.id) AS skills
        FROM candidate_data c
        WHERE c.name LIKE ? AND c.location LIKE ? AND c.designation LIKE ?
    ");

    if (!$stmt) {
        throw new Exception("Failed to prepare SQL statement: " . $connection->error);
    }

    $stmt->bind_param("sss", $candidateName, $location, $designation);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 0) {
        http_response_code(404);
        echo json_encode(['error' => 'No candidates found matching the search criteria.']);
        exit;
    }

    $candidates = [];
    while ($row = $result->fetch_assoc()) {
        $candidates[] = [
            'id' => $row['id'],
            'name' => $row['name'],
            'email' => $row['email'],
            'mobile' => $row['mobile'],
            'location' => $row['location'],
            'profile_summary' => $row['profile_summary'],
            'designation' => $row['designation'],
            'resume_file' => $row['resume_file'],
            'nationality' => $row['nationality'] ?: 'N/A',
            'year_of_experience' => $row['year_of_experience'] ?: 'N/A',
            'languages_known' => $row['languages_known'] ?: 'N/A',
            'highest_degree' => $row['highest_degree'] ?: 'N/A',
            'skills' => $row['skills'] ? explode(',', $row['skills']) : [],
            'total_experience' => 0
            // 'total_experience' => $row['total_experience'] ?: 0
        ];
    }

    echo json_encode(['candidates' => $candidates]);
    http_response_code(200);
} catch (Exception $e) {
    error_log("Error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'An unexpected error occurred: ' . $e->getMessage()]);
} finally {
    if (isset($stmt)) {
        $stmt->close();
    }
    $connection->close();
}
