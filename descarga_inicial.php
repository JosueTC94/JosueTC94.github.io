<?php

$jsondata = array();
// Create connection
$conn = new mysqli('127.0.0.1','josuetc94','','c9','3306');
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$jsondata['success'] = "Entre";

$query = "SELECT * FROM practicas";
$result = $conn->query($query);

if ($result->num_rows > 0) {
// output data of each row
    $jsondata['num_rows'] = $result->num_rows;
} else {
    $jsondata['num_rows'] = "0 results";
}

header('Content-type: application/json; charset=utf-8');
echo json_encode($jsondata, JSON_FORCE_OBJECT);
?>