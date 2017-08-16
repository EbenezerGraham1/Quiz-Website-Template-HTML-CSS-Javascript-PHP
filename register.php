<html>

<head>
    <meta charset="utf-8">
    <title>Thank You</title>
    <link href="css/stylesheet.css" rel="stylesheet" type="text/css">
    <script src="js/functions.js" rel="javascript" type="text/javascript"></script>
    <link href="images/icons/ALU-Learn_fav.png" rel="icon" type="image/png">
</head>

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
 

$firstname=$_POST['firstname'];
$lastname=$_POST['lastname'];
$email=$_POST['email'];
$category=$_POST['category'];
$password=$_POST['password'];


$query=$conn->prepare("INSERT INTO users VALUES ('','$firstname','$lastname','$email','$category','$password')");
$query->execute();

$conn = null;
?>
<body>
    <header>
        <div class="main_menu">
        <div id="pages">
            <ul>
                <li><a href="index.html">HOME</a></li>
                
                <li> <a href="#">MODULES</a>
                    <ul>
                        <li><a href="introduction-to-newtworking.html"><span><img src="images/icons/networking_filled-50.png" class="icons"></span>Introduction to Networking</a></li>
                        <li><a href="software-engineering.html"><span><img src="images/icons/software_engineering_filled-50.png" class="icons"></span>Software Engineering</a></li>
                        <li><a href="programming-one-java.html"><span><img src="images/icons/programming_filled-50.png" class="icons"></span>Programming One</a></li>
                        <li><a href="mathematics-for-computing.html"><span><img src="images/icons/math_filled-50.png" class="icons"></span>Mathematics for computing</a></li>
                        <li></li>
                    </ul>
                </li>
                <li><a href="quiz-platform.html">QUIZ PLATFORM</a></li>
                <li><a href="#homefooter">CONTACT MODULE LEADER</a></li>
            </ul>
        </div>
        <div id="logo"> <a href="index.html"><img class="logo" src="Images/icons/alu_learn.png" alt="ALU LEARN"/></a> </div>
    </div>
    </header>
    <div id="confirm-box">
        <?php echo $_POST['firstname'].', Thank you for registering on ALU Learn ';?>
    </div>
</body>

</html>