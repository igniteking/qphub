<?php

// Include the database connection configuration
include('connections/connection.php');

// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");

// Set the response header for JSON
header('Content-Type: application/json');

// Validate user authentication (simulate Clerk's `getAuth` method)
if (!isset($_GET['clerk_id']) || empty($_GET['clerk_id'])) {
    http_response_code(401);
    echo json_encode(['error' => 'Unauthorized: Clerk ID is missing']);
    exit;
}

$authUserId = $_GET['clerk_id'];

// Connect to the database
$connection = new mysqli($MYSQL_HOST, $MYSQL_USER, $MYSQL_PASSWORD, $MYSQL_DATABASE);

// Check if the connection was successful
if ($connection->connect_error) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed: ' . $connection->connect_error]);
    exit;
}

try {
    // Fetch logged user ID
    $stmt = $connection->prepare("SELECT id FROM users WHERE clerk_id = ?");
    $stmt->bind_param("s", $authUserId);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 0) {
        http_response_code(404);
        echo json_encode(['error' => 'User not found']);
        exit;
    }

    $loggedUserId = $result->fetch_assoc()['id'];

    // Query all candidate IDs for the logged-in user
    $stmt = $connection->prepare("SELECT candidate_id FROM resume_json_code WHERE uploaded_by_user_id = ? ORDER BY id DESC");
    $stmt->bind_param("i", $loggedUserId);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 0) {
        http_response_code(200);
        echo json_encode(['message' => 'No resumes uploaded']);
        exit;
    }

    $candidateIds = [];
    while ($row = $result->fetch_assoc()) {
        $candidateIds[] = $row['candidate_id'];
    }

    // Use `IN` to fetch multiple candidate data at once
    $placeholders = implode(',', array_fill(0, count($candidateIds), '?'));
    $types = str_repeat('i', count($candidateIds));

    $query = "SELECT * FROM candidate_data WHERE id IN ($placeholders)";
    $candidateDataStmt = $connection->prepare($query);
    $candidateDataStmt->bind_param($types, ...$candidateIds);
    $candidateDataStmt->execute();
    $candidateDataResult = $candidateDataStmt->get_result();

    $candidates = [];
    while ($row = $candidateDataResult->fetch_assoc()) {
        $candidates[$row['id']] = $row;
    }

    // Fetch work experience for all candidates
    $query = "SELECT * FROM work_experience WHERE candidate_id IN ($placeholders)";
    $workExperienceStmt = $connection->prepare($query);
    $workExperienceStmt->bind_param($types, ...$candidateIds);
    $workExperienceStmt->execute();
    $workExperienceResult = $workExperienceStmt->get_result();

    $workExperienceData = [];
    while ($row = $workExperienceResult->fetch_assoc()) {
        $workExperienceData[$row['candidate_id']][] = $row;
    }

    // Construct the final response
    $resumeDataArray = [];
    foreach ($candidateIds as $candidateId) {
        $resumeDataArray[] = [
            'candidateData' => $candidates[$candidateId] ?? null,
            'workExperience' => $workExperienceData[$candidateId] ?? []
        ];
    }

    echo json_encode($resumeDataArray);
} catch (Exception $e) {
    http_response_code(500);
    error_log("Error: " . $e->getMessage());
    echo json_encode(['error' => 'Internal server error']);
} finally {
    $stmt->close();
    $candidateDataStmt->close();
    $workExperienceStmt->close();
    $connection->close();
}
