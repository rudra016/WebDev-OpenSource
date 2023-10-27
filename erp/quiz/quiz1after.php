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
    <link rel="stylesheet" href="quiz1after.css">
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
                      Home
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
<!-- ////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->


      <div class="main-content">

        <div class=" row ">
 
        <h1 class="col-lg-1 col-md-1">Quiz</h1>

<div class="col-lg-6 col-md-4"></div>
<div class="tabl col-lg-5 col-md-8 row d-flex justify-content-between">

            <div><span class="dot1"></span>Completed</div>
            <div><span class="dot2"></span>Not Attempted</div>
            <div><span class="dot3"></span>Pending</div>

    </div>

    </div>
    <?php
$selected_subject = $_GET['state'];

$roll_no=$_GET['roll_no'];
$selected_subject = str_replace(' ', '_', $selected_subject);

$conn = mysqli_connect("localhost","root","","erp");

$query = "SELECT  * FROM $selected_subject ORDER BY quiz_no DESC";

$querytable = "SHOW TABLES";
$querytablerun = mysqli_query($conn,$querytable);
$found=0;
while($result = mysqli_fetch_assoc($querytablerun)){
  if(strtoupper($result['Tables_in_erp'])==$selected_subject){
    $found=1;
  }
}
if($found!=0){
$queryrun = mysqli_query($conn,$query);

$result = mysqli_fetch_assoc($queryrun);
if($result!=NULL){
$total_quiz=$result['quiz_no'];
echo "<div>";
for($i=$total_quiz;$i>=1;$i--){
  
  echo "<a href='quiz3.php?roll_no=$roll_no&state=$i&subject=$selected_subject' class='col-lg-6 col-md-6 col-sm-6'>
            <div class='card  d-flex justify-content-center'>
         
              <div class='container d-flex justify-content-center'>
                <h4><b>Quiz $i</b></h4>
              </div>
            </div>
            <a>";
}
}
else{
  echo"<h1>Quiz Not Found</h1>";
  
}}
else{
  echo "<h1>Quiz Not Found</h1>";
}
?>
</div>
    </body>
    </html>