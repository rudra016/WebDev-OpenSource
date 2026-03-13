<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 , shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="quiz.css">
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
            <a href="#" class="nav-link text-dark">
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
                      Feedback
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
<!-- //////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
<div class="main-content">
  <?php
  $conn = mysqli_connect("localhost","root","","erp");
  $query2= "SELECT subject_name FROM faculty";
  $runquey = mysqli_query($conn, $query2);
  echo "<h1 class='d-flex justify-content-center'>SELECT SUBJECT</h1>";
  $i=0;
  $roll_no=1234567890;
  while($result = mysqli_fetch_assoc($runquey)){
    $aa=$result['subject_name'];
    if($i%2==0){
  echo "<div class=\"row\">

  <a href='quiz1after.php?roll_no=$roll_no&state=$result[subject_name]' class='col-lg-6 col-md-6'>
  <div class=\"card  d-flex justify-content-center\">
    <div class=\"container d-flex justify-content-center\">
      <h4><b>$result[subject_name]  </b></h4>
    </div>
  </div>
  </a>";}
else {
  echo "

  <a href=\"quiz1after.php?state=$result[subject_name]&roll_no=$roll_no\" class=\"col-lg-6 col-md-6 \">
  <div class=\"card  d-flex justify-content-center\">
    <div class=\"container d-flex justify-content-center\">
      <h4><b>$result[subject_name]  </b></h4>
    </div>
  </div>
  </a>
</div>";
}
$i++;
  }
   ?>


 
</body>
</html>