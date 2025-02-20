<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

include('connections/connection.php');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["message" => "Method Not Allowed"]);
    exit;
}

try {
    $input = file_get_contents("php://input");
    $userData = json_decode($input, true);

    if (!$userData) {
        http_response_code(400);
        echo json_encode(["message" => "Invalid JSON"]);
        exit;
    }

    // Validate required fields based on DB structure
    $required = ['userId', 'userEmail', 'userRole'];
    foreach ($required as $field) {
        if (!isset($userData[$field]) || $userData[$field] === '') {
            http_response_code(400);
            echo json_encode(["message" => "Missing required field: $field"]);
            exit;
        }
    }

    $connection = mysqli_connect(
        $MYSQL_HOST,
        $MYSQL_USER,
        $MYSQL_PASSWORD,
        $MYSQL_DATABASE
    );

    if (mysqli_connect_errno()) {
        http_response_code(500);
        echo json_encode(["message" => "Database connection failed", "error" => mysqli_connect_error()]);
        exit;
    }

    // Prepare statement with correct NULL handling
    $stmt = mysqli_prepare($connection, "
        INSERT INTO users (
            clerk_id, 
            full_name, 
            email, 
            first_name, 
            last_name, 
            profile_picture, 
            role,
            created_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    ");

    if (!$stmt) {
        http_response_code(500);
        echo json_encode(["message" => "SQL prepare failed", "error" => mysqli_error($connection)]);
        exit;
    }

    // Bind parameters with proper null handling
    $firstName = $userData['userFirstName'] ?? '';
    $lastName = $userData['userLastName'] ?? '';
    $timestamp = date("Y-m-d H:i:s"); // Generates IST timestamp
    mysqli_stmt_bind_param(
        $stmt,
        "ssssssss",
        $userData['userId'],
        $userData['userFullName'],
        $userData['userEmail'],
        $firstName,
        $lastName,
        $userData['userProfilePicture'],
        $userData['userRole'],
        $timestamp
    );

    if (!mysqli_stmt_execute($stmt)) {
        $error = mysqli_stmt_error($stmt);
        // Handle duplicate entry specifically
        if (strpos($error, 'Duplicate entry') !== false) {
            http_response_code(409);
            echo json_encode(["message" => "User already exists"]);
        } else {
            http_response_code(500);
            echo json_encode(["message" => "Database error", "error" => $error]);
        }
        exit;
    }

    echo json_encode(["message" => "User saved successfully"]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["message" => "Server error", "error" => $e->getMessage()]);
}
