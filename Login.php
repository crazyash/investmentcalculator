<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "myDB";
$DEBUGFLAG = "ON";

// Create connection
$conn = new mysqli ( $servername, $username, $password, $dbname );
// Check connection
if ($conn->connect_error) {
	die ( "Connection failed: " . $conn->connect_error );
}

$sql = "SELECT * FROM users WHERE username='" . $_POST ["username"] . "'";
$row = $conn->query ( $sql )->fetch_assoc ();
$conn->close ();

if ($GLOBALS ['DEBUGFLAG'] == "ON") {
	echo "User: " . $_POST ["username"];
	echo "<br/>";
	echo "Pass: " . $_POST ["password"];
	echo "<br/>";
	echo "DB User: " . $row ["username"];
	echo "<br/>";
	echo "DB Pass: " . $row ["password"];
	echo "<br/>";
}
if ($_POST ["username"] != '' && $_POST ["username"] != null && $_POST ["password"] != '' && $_POST ["password"] != null) {
	if ($row ["username"] == $_POST ["username"] and $row ["password"] == $_POST ["password"]) {
		echo "Login Successful";
	} else {
		echo "Login Failed";
		if ($GLOBALS ['DEBUGFLAG'] == "ON")
			echo $conn->error;
	}
}
else {
	echo "Username and Password are mandatory";
}

?> 
