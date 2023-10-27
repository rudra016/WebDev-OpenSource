<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style.css"> 
    <link rel="stylesheet" href="feedback.css">   
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
      <!-- //////////////////////////////////////////////////////////////////////////////////////////////////////////////// -->
<div class="main-content">
    <h1 class='text-center'>Feedback Forum</h1>
    <table class="table bg-light table-hover table-bordered">
      <?php 
    $conn = mysqli_connect("localhost","root","","erp");
    $query= "SELECT * FROM feedback_list";
    $runquery = mysqli_query($conn, $query);
    echo '<tr>
    <th class="bg-secondary text-white text-center">S.No.</th>
    <th class="bg-secondary text-white">Title</th>
    <th class="bg-secondary text-center text-white">Status</th>
</tr>';
$i=1;
    while($result = mysqli_fetch_assoc($runquery)){
      if($result['duration']=='Open'){
        $new=strtolower(trim($result['title']," Feedback"));
        echo '<tr>
            <td class="text-center bg-info text-white">'.$i.'</td>
           <td class="bg-info text-white"><a href="'.$new.'.html" class="text-white">'.$result['title'].'</a></td>
            <td class="text-center bg-info text-white">'.$result['duration'].'</td>
        </tr>';
      }
      else{
        echo '<tr>
            <td class="text-center">'.$i.'</td>
            <td>'.$result['title'].'</td>
            <td class="text-center">'.$result['duration'].'</td>
        </tr>';
      }
      
        $i++;
    }
 
   ?>
    </table>
</div>
</body>
</html>