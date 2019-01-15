<?php
require 'GlobalFunctions.php';
$debugflag = "OFF";

$conn = getDBConn ();

if ($GLOBALS ['DEBUGFLAG'] == "ON" or $debugflag == "ON")
	echo "User: ";

$sql = "INSERT INTO `users` (`id`, `firstname`, `lastname`, `username`, `password`, `email`, `registrationdate`)
		 VALUES (NULL,
				'" . $_POST ["firstname"] . "',
		 		'" . $_POST ["lastname"] . "',
		 		'" . $_POST ["username"] . "',
		 		'" . $_POST ["password"] . "',
		 		'" . $_POST ["email"] . "',
		 		CURRENT_TIMESTAMP)";

if ($conn->query ( $sql ) === TRUE) {
	echo "New record created successfully";
} else {
	echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close ();
?> 