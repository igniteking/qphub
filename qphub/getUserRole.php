<?php

// Include the database connection configuration
include('connections/connection.php');

// Add CORS headers
header("Access-Control-Allow-Origin: *"); // Allow all origins (use specific domain in production)
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Allow specific HTTP methods
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Allow specific headers
header('Content-Type: application/json'); // JSON response

// Validate the `clerk_id` parameter
if (!isset($_GET['clerk_id']) || empty($_GET['clerk_id'])) {
    echo json_encode([
        'error' => 'clerk_id is required'
    ]);
    http_response_code(400);
    exit;
}

$clerk_id = $_GET['clerk_id'];

try {
    // Establish connection to the database
    $connection = new mysqli($MYSQL_HOST, $MYSQL_USER, $MYSQL_PASSWORD, $MYSQL_DATABASE);

    // Check for connection errors
    if ($connection->connect_error) {
        throw new Exception("Connection failed: " . $connection->connect_error);
    }

    // Prepare the SQL statement
    $stmt = $connection->prepare("SELECT role FROM users WHERE clerk_id = ?");
    if (!$stmt) {
        throw new Exception("Failed to prepare statement: " . $connection->error);
    }

    // Bind the parameter and execute the statement
    $stmt->bind_param("s", $clerk_id);
    $stmt->execute();

    // Get the result
    $result = $stmt->get_result();

    // Check if the user exists
    if ($result->num_rows === 0) {
        echo json_encode([
            'error' => 'User not found'
        ]);
        http_response_code(404);
        exit;
    }

    // Fetch the user's role
    $row = $result->fetch_assoc();
    echo json_encode([
        'role' => $row['role']
    ]);
    http_response_code(200);
} catch (Exception $e) {
    // Log the error (optional for debugging)
    error_log("Error: " . $e->getMessage());

    echo json_encode([
        'error' => 'An error occurred while fetching the user role'
    ]);
    http_response_code(500);
} finally {
    // Close the connection and statement if they exist
    if (isset($stmt)) {
        $stmt->close();
    }
    if (isset($connection)) {
        $connection->close();
    }
}
