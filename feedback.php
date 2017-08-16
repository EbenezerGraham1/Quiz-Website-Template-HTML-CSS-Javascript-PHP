<html>

<head>
    <meta charset="utf-8">
    <title>Thank You</title>
    <link href="css/stylesheet.css" rel="stylesheet" type="text/css">
    <script src="js/functions.js" rel="javascript" type="text/javascript"></script>
    <link href="images/icons/ALU-Learn_fav.png" rel="icon" type="image/png">
</head>

<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "alulearn";
$first = $_POST[ 'first' ];
$last = $_POST[ 'last' ];
$email = $_POST[ 'email' ];
$moduleleader = $_POST[ 'moduleleader' ];
$message = $_POST[ 'message' ];
try {
    $connectDB = new PDO( "mysql:host=$servername;dbname=$dbname", $username, $password );
} catch ( PDOException $e ) {
    echo "Connection failed: " . $e->getMessage();
}
$prepareSQL = $connectDB->prepare( "INSERT INTO feedback VALUES ('','$first','$last','$email','$moduleleader','$message')" );
$prepareSQL->execute();
$connectDB = null;
?>

<body>
    <header>
        <div class="main_menu">
        <div id="pages">
            <ul>
                <li><a href="index.html">HOME</a></li>
                
                <li> <a href="#">MODULES</a>
                     <ul>
                        <li><a href="introduction-to-networking.html"><span><img alt="networking icon" src="images/icons/networking_filled-50.png" class="icons"></span>Introduction to Networking</a></li>
                        <li><a href="software-engineering.html"><span><img alt="software engineering icon" src="images/icons/software_engineering_filled-50.png" class="icons"></span>Software Engineering</a></li>
                        <li><a href="programming-one-java.html"><span><img alt="programming icon" src="images/icons/programming_filled-50.png" class="icons"></span>Programming One</a></li>
                        <li><a href="mathematics-for-computing.html"><span><img alt="mathematics icon" src="images/icons/math_filled-50.png" class="icons"></span>Mathematics for computing</a></li>
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
        <?php echo 'Hi '.$first.' '.$last.' your feedback has been recorded.'.$moduleleader.' will contact you within three working days';?>
    </div>
</body>

</html>