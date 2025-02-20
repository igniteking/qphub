<?php

// Include the database connection configuration
include('connections/connection.php');

// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type");

// Set the response header for JSON
header('Content-Type: application/json');

// Validate user authentication
if (!isset($_GET['clerk_id']) || empty($_GET['clerk_id'])) {
    http_response_code(401);
    echo json_encode(['error' => 'User authentication failed: Missing or invalid Clerk ID.']);
    exit;
}

$authUserId = $_GET['clerk_id'];

// Connect to the database
$connection = new mysqli($MYSQL_HOST, $MYSQL_USER, $MYSQL_PASSWORD, $MYSQL_DATABASE);

if ($connection->connect_error) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed: ' . $connection->connect_error]);
    exit;
}

try {
    // Fetch logged user ID from the database
    $stmt = $connection->prepare("SELECT id FROM users WHERE clerk_id = ?");
    if (!$stmt) {
        throw new Exception("Failed to prepare statement for fetching user ID: " . $connection->error);
    }

    $stmt->bind_param("s", $authUserId);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 0) {
        http_response_code(404);
        echo json_encode(['error' => 'No user found with the provided Clerk ID.']);
        exit;
    }

    $loggedUserId = $result->fetch_assoc()['id'];
    $stmt->close();

    // Query to get the total number of candidate IDs for the logged user
    $stmt = $connection->prepare("SELECT COUNT(candidate_id) AS total_ids FROM resume_json_code WHERE uploaded_by_user_id = ?");
    if (!$stmt) {
        throw new Exception("Failed to prepare statement for fetching candidate IDs: " . $connection->error);
    }

    $stmt->bind_param("i", $loggedUserId);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 0) {
        http_response_code(404);
        echo json_encode(['error' => 'No candidate IDs found for the logged-in user.']);
        exit;
    }

    // Fetch the total count from the result
    $row = $result->fetch_assoc();
    $totalIds = $row['total_ids'];
    $stmt->close();

    echo json_encode(['total_ids' => $totalIds]);
    http_response_code(200);
    exit;
} catch (Exception $e) {
    // Log the error
    error_log("Error: " . $e->getMessage());

    http_response_code(500);
    echo json_encode(['error' => 'An unexpected server error occurred. Please try again later.', 'details' => $e->getMessage()]);
} finally {
    // Close the database connection
    if ($connection) {
        $connection->close();
    }
}
