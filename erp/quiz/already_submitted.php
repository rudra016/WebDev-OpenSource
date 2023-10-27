<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="quiz2.css">
    <link rel="stylesheet" href="quiz3.css">
    <title>Document</title>
</head>
<body>
    <div class="vertical-nav bg-white" id="sidebar">
        <div class="py-4 px-3 mb-4 bg-light">
          <div class="media d-flex align-items-center">
            <img loading="lazy" src="../image.png" alt="..." width="80" height="80" class="mr-3 rounded-circle img-thumbnail shadow-sm">
            <div class="media-body">
              <h4 class="m-0"><strong>Profile</strong></h4>
              <p class="font-weight-normal text-muted mb-0">Student</p>
            </div>
          </div>
        </div>
      
        <p class="text-gray font-weight-bold text-uppercase px-3 small pb-4 mb-0">Dashboard</p>
      
        <ul class="nav flex-column bg-white mb-0">
          <li class="nav-item">
            <a href="../home/home.php" class="nav-link text-dark bg-light">
                      <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
                      home
                  </a>
          </li>
          <li class="nav-item">
            <a href="../TimeTable/timetable.php" class="nav-link text-dark">
                      <i class="fa fa-address-card mr-3 text-primary fa-fw"></i>
                      Time Table
                  </a>
          </li>
          <li class="nav-item">
            <a href="../quiz/quiz.php" class="nav-link text-dark">
                      <i class="fa fa-cubes mr-3 text-primary fa-fw"></i>
                      Quiz
                  </a>
          </li>
          <li class="nav-item">
            <a href="../result/result.html" class="nav-link text-dark">
                      <i class="fa fa-bar-chart mr-3 text-primary fa-fw"></i>
                      One View
                  </a>
          </li>
        </ul>
      
        
      
        <ul class="nav flex-column bg-white mb-0">
          <li class="nav-item">
            <a href="#" class="nav-link text-dark">
                      <i class="fa fa-area-chart mr-3 text-primary fa-fw"></i>
                      Dashboard
                  </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-dark">
                      <i class="fa fa-bar-chart mr-3 text-primary fa-fw"></i>
                      Dashboard
                  </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-dark">
                      <i class="fa fa-pie-chart mr-3 text-primary fa-fw"></i>
                      Dashboard
                  </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-dark">
                      <i class="fa fa-line-chart mr-3 text-primary fa-fw"></i>
                      Dashboard
                  </a>
          </li>
        </ul>
      </div>
<!-- /////////////////////////////////////////////////////////////////////////////////////////////////////// -->
<div class="main-content">
<h1 class="d-flex justify-content-center">Result</h1>

<?php

$subject = $_GET['subject'];
$roll_no = $_GET['roll_no'];
$subject = strtolower($subject);


$query= "SELECT * FROM $subject where quiz_no = $quiz_no ";
$queryrun = mysqli_query($conn,$query);

$sub=$subject; 

$extra="_quiz_result";
$sub.=$extra;

$query2= "SELECT * FROM $sub where quiz_no = $quiz_no and roll_no=$roll_no";
$query2run = mysqli_query($conn,$query2);

$query0= "SELECT * FROM $subject ORDER BY ques_no DESC";
$queryrun0 = mysqli_query($conn,$query0);
$result0 = mysqli_fetch_assoc($queryrun0);
$result1 = mysqli_fetch_assoc($query2run);
echo "<div class='card'>
  <div class='container'>
    <label>Total Marks : $result1[quiz_no]</label><br>
    <label>Max Marks &nbsp: ". $result0['ques_no']."</label><br>
  </div>
    </div>";

$i=1;
while($result = mysqli_fetch_assoc($queryrun)){
  echo "
  <div class='card'>
  <div class='container'>

  <h3>Ques $i.</h3>

  <label><h5> $result[ques]</h5></label><br> 

    <label>
    1. $result[option_1]
    </label><br>

  
    <label>2. $result[option_2]</label><br>
 
    <label>3. $result[option_3]</label><br>

    <label>4. $result[option_4]</label><br>
    
    <b><label style='color:blue'>Correct Answer : ". $result['correct_option']."</label></b>

    </div>
    </div>";
  
  $i++;
}
 ?>
 </div>
 </body>
</html>