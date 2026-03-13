<?php 
$servername = "localhost";
$username = "root";
$password = "";
$db= "feedback";

// Create connection
$conn = new mysqli($servername, $username, $password,$db);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$aa = $_GET['f1'];
$bb = $_GET['f2'];
$cc = $_GET['f3'];
$dd = $_GET['f4'];
$ee = $_GET['f5'];
$ff = $_GET['f6'];
$gg = $_GET['f7'];
$name = "aaa";
$roll_no = "123";
$sql = "INSERT INTO 'college' VALUES ($roll_no, $name , $aa, $bb, $cc, $dd, $ee, $ff, $gg)";
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
  
  $conn->close();

?>
