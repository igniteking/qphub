<?php

// Include the database connection configuration
include('connections/connection.php');

// Enable CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Connect to the database
$connection = new mysqli($MYSQL_HOST, $MYSQL_USER, $MYSQL_PASSWORD, $MYSQL_DATABASE);

if ($connection->connect_error) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed: ' . $connection->connect_error]);
    exit;
}

// Helper function to safely handle values
function safeValue($value)
{
    return ($value === "not found" || $value === null) ? null : $value;
}

// Handle the request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // File upload logic
    if (isset($_FILES['file'])) {
        $uploadDir = 'uploads/';
        $fileName = basename($_FILES['file']['name']);
        $targetFilePath = $uploadDir . $fileName;

        if (!file_exists($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }

        if (move_uploaded_file($_FILES['file']['tmp_name'], $targetFilePath)) {
            $fileUrl = $targetFilePath;
        } else {
            http_response_code(500);
            echo json_encode(['error' => 'File upload failed: Unable to move uploaded file.']);
            exit;
        }
    } else {
        http_response_code(400);
        echo json_encode(['error' => 'No file uploaded: Please attach a file to upload.']);
        exit;
    }

    // Get JSON input
    $jsonData = json_decode($_POST['json'], true);

    // Check if JSON is valid
    if (json_last_error() !== JSON_ERROR_NONE) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid JSON format: ' . json_last_error_msg()]);
        exit;
    }

    // Begin a transaction
    $connection->begin_transaction();

    try {
        // Insert into candidate_data table
        $stmt = $connection->prepare("INSERT INTO candidate_data (name, email, mobile, location, profile_summary, designation, resume_file, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
        if (!$stmt) {
            throw new Exception("Failed to prepare statement for inserting candidate data: " . $connection->error);
        }

        $name = safeValue($jsonData['Name']);
        $email = safeValue($jsonData['ContactInformation']['Email']);
        $mobile = safeValue($jsonData['ContactInformation']['Mobile']);
        $location = safeValue($jsonData['ContactInformation']['Location']);
        $profileSummary = safeValue($jsonData['Profile']);
        $designation = safeValue($jsonData['Designation']);
        $resumeFile = $fileUrl;
        $timestamp = date("Y-m-d H:i:s"); // Generates IST timestamp

        $stmt->bind_param("sssssss", $name, $email, $mobile, $location, $profileSummary, $designation, $resumeFile, $timestamp);
        $stmt->execute();

        // Get the candidate ID after the insert
        $candidate_id = $connection->insert_id;
        $stmt->close();

        // Get the logged user ID
        $authUserId = isset($_POST['clerk_id']) ? $_POST['clerk_id'] : null;

        if ($authUserId === null) {
            throw new Exception('Missing clerk_id: User authentication is required.');
        }

        // Get inserted user ID
        $stmt = $connection->prepare("SELECT id FROM users WHERE clerk_id = ?");
        if (!$stmt) {
            throw new Exception("Failed to prepare statement for fetching user ID: " . $connection->error);
        }

        $stmt->bind_param("s", $authUserId);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows === 0) {
            throw new Exception('Logged User ID not found: Invalid clerk_id provided.');
        }

        $insertedUserId = $result->fetch_assoc()['id'];
        $stmt->close();

        // Insert into resume_json_code table
        $jsonDataString = safeValue(json_encode($jsonData));
        $timestamp = date("Y-m-d H:i:s"); // Generates IST timestamp

        $stmt = $connection->prepare("INSERT INTO resume_json_code (uploaded_by_user_id, candidate_id, json_code, created_at) VALUES (?, ?, ?, ?)");
        if (!$stmt) {
            throw new Exception("Failed to prepare statement for inserting JSON data: " . $connection->error);
        }

        $stmt->bind_param("iis", $insertedUserId, $candidate_id, $jsonDataString, $timestamp);
        $stmt->execute();
        $stmt->close();

        // Commit the transaction
        $connection->commit();
        echo json_encode(['message' => 'Data and file uploaded successfully!']);
        http_response_code(200);
    } catch (Exception $e) {
        // Rollback the transaction in case of error
        $connection->rollback();

        // Log the error (optional)
        error_log("Error: " . $e->getMessage());

        http_response_code(500);
        echo json_encode(['error' => 'Failed to insert data: ' . $e->getMessage()]);
    } finally {
        // Close the database connection
        $connection->close();
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Invalid request method: Only POST requests are allowed.']);
}
