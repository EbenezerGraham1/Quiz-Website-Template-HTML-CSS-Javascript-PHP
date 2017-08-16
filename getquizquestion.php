<?php
	define("DB_SERVER", "localhost");
	define("DB_USER", "root");
	define("DB_PASS", "");
	define("DB_NAME", "alulearn");


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "alulearn";

 
try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", DB_USER, DB_PASS);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
   // echo "Connected successfully <br />"; 
     }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }


$query=$conn->prepare("SELECT * FROM cafe WHERE available='yes'");
$query->execute();

$results=$query->fetchAll(PDO::FETCH_ASSOC);
 
foreach ($results as $row) {
   	echo $row['name'] . "<br />";
   	echo $row['description'] . "<br />";
   	echo $row['price'] . "<br />";
	echo $row['category'] . "<br />";
	echo $row['available'] . "<br />";
	echo "<hr />";
 }
 
$conn = null;
 ?>