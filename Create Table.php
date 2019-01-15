<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
 // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
 
// Create database
  $sql = "CREATE TABLE Users (
 username VARCHAR(30) NOT NULL PRIMARY KEY,
 password VARCHAR(30) NOT NULL,
 email VARCHAR(50),
 registrationdate TIMESTAMP
 ) ";
if ($conn->query($sql) === TRUE) {
    echo "Table Users created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}

$conn->close();
?> 