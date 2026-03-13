<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 , shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../quiz/style.css">
    <link rel="stylesheet" href="home.css">

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
            <a href="#" class="nav-link text-dark bg-light">
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
    <div class="card0 row">
        <div class="card col-lg-5 col-sm-12">
        <?php 
        $roll = 1234567890;
            $conn = mysqli_connect("localhost","root","","erp");
            $query = "SELECT * FROM student_details WHERE roll_no = $roll";
            $runquery = mysqli_query($conn, $query);
            while($result = mysqli_fetch_assoc($runquery)){
                $name= $result["name"];
                $father_name=$result["father_name"];
                $mother_name=$result["mother_name"];
                $roll_no=$result["roll_no"];
                $mobile_no=$result["mobile_no"];
                $father_mobile_no=$result["father_mobile_no"];
                $mother_mbile_no=$result["mother_mobile_no"];
                $permanent_address=$result["permanent_address"];
                $local_address=$result["local_address"];
                $dob=$result['dob'];
                $semester=$result['semester'];
                $academic_status=$result['academic_status'];
                $email=$result['email'];
                $gender=$result['gender'];
                $blood_group=$result['blood_group'];
                $class=$result['class'];
                $branch=$result['branch'];
                $course=$result['course'];
            }
            echo ' <img src="../image.png" alt="John" style="width:100%">
            <h2>'.$name.'</h2>
            <p class="title">'.$course.', '.$branch.'</p>
            <p>University Roll No. '.$roll_no.'</p>
            <p>Semester '.$semester.'</p>

       </div>
       <span class=" card1 col-lg-9 col-sm-12">
            <h3>Details</h3>
            <div class="dot0"><span class="dot"></span>
<span class="dot"></span>
<span class="dot"></span>
<span class="dot"></span></div>
            <table class=" table table-hover">
            <tr>
                    <td> <h6 class="title">Section</h6></td>
                    <td> <h6 class="title">'.$class.'</h6></td>
                </tr>
                
             <tr>
                    <td><h6 class="title">Class Roll No.</h6>
                    </td>
                    <td><h6 class="title">'.$roll_no.'</h6>
                    </td>
    
                </tr>
                <tr>
                    <td> <h6 class="title">DOB</h6></td>
                    <td> <h6 class="title">'.$dob.'</h6></td>
                </tr>
                
                <tr>
                    <td><h6 class="title">Academic Status</h6>  </td>
                    <td> <h6 class="title">'.$academic_status.'</h6></td>

                </tr>
                <tr>
                    <td ><h6 class="title">
                         E-mail</h6>
                    </td>
                    <td> <h6 class="title">'.$email.'</h6></td>
                </tr>
                <tr>
                    <td><h6 class="title">
                        Mobile No.</h6>
                    </td>
                    <td><h6 class="title">
                    '.$mobile_no.'</h6>
                </td>
                </tr>
            </table>
        </span>
    <div>
    
    <div class="card3 row">
        <h3>About</h3>
        <table class="table table-hover">
            
        
            <tr>
                <td><h6 class="title">
                    Gender</h6>
                </td>
                <td> <h6 class="title">'.$gender.'</h6></td>
            </tr>
            <tr>
                <td><h6 class="title">
                   Blood Group </h6>
                </td>
                <td> <h6 class="title">'.$blood_group.'</h6></td>
            </tr>
            <tr>
                <td><h6 class="title">
                   Father\'s Name </h6>
                </td>
                <td><h6 class="title">
               ' .$father_name.'</h6>
            </td>
            </tr>
            <tr>
                <td><h6 class="title">
                    Father\'s Mobile No. </h6>
                 </td>
                 <td><h6 class="title">
                '.$father_mobile_no.'</h6>
             </td>
                    
                </td>
            </tr>
            <tr>
                <td><h6 class="title">
                   Mother\'s Name </h6>
                </td>
                <td><h6 class="title">
                '.$mother_name.'</h6>
            </td>
            </tr>
            <tr>
                <td><h6 class="title">
                    Mother\'s Mobile No. </h6>
                </td>
                <td><h6 class="title">
               '.$mother_mbile_no.'</h6>
            </td>
            </tr>
     
           
            <tr>
                <td><h6 class="title">
                   Permanent Address </h6>
                </td>
                <td><h6 class="title">
                '.$permanent_address.'</h6>
            </td>
            </tr>
            <tr>
                <td><h6 class="title">
                    Local Address </h6>
                </td>
                <td><h6 class="title">
              '.$local_address.'</h6>
            </td>
            </tr> ';
            ?>
        </table>
    </div>

</div>







</div>
</body>
</html>