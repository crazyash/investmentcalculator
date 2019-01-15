<?php

require 'GlobalVariables.php';

function getDBConn(){
	
	// Create connection
	$conn = new mysqli($GLOBALS ['SERVERNAME'], $GLOBALS ['USERNAME'], $GLOBALS ['PASSWORD'], $GLOBALS ['DBNAME']);
	// Check connection
	if ($conn->connect_error) {
		die("Connection failed: " . $conn->connect_error);
	}
	else
		return $conn;
	
}


?>