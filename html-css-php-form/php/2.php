<?php
$servername = "localhost";
$username = "root";
$password = "";
$db_name="mydb";

// Create connection
$conn = mysqli_connect($servername,$username,$password,$db_name);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

//form

$firstname=$_POST["firstname"];
$email=$_POST["email"];
$lastname=$_POST["lastname"];

$sql = "INSERT INTO myguests (firstname,lastname,email) VALUES ('$firstname','$lastname','$email')";
$result =mysqli_query($conn,$sql);
if(!$result){
    echo "error" .mysqli_error($conn);
    exit;
}
echo "done";
mysqli_close($conn);
?>