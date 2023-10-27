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
            <a href="#" class="nav-link text-dark bg-light">
                      <i class="fa fa-th-large mr-3 text-primary fa-fw"></i>
                      Home
                  </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link text-dark">
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
            <a href="#" class="nav-link text-dark">
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
<!-- /////////////////////////////////////////////////////////////////////////////////////////////////////// -->

  
<?php
  $conn = mysqli_connect("localhost","root","","erp");

  $quiz_no=$_GET['state'];
  $roll_no=$_GET['roll_no'];
  $selected_subject=$_GET['subject'];

  $selected_subject=strtolower($selected_subject); 
  $sub=$selected_subject; 
  $extra="_quiz_result";
  $sub.=$extra;

  $newquery = "SELECT * FROM $sub WHERE roll_no=$roll_no and quiz_no = $quiz_no";
  $newqueryrun = mysqli_query($conn,$newquery) ;
  $result = mysqli_fetch_assoc($newqueryrun);

  if($result != null){
    include "already_submitted.php";

  }
  else{
    $query="SELECT * FROM $selected_subject where quiz_no = $quiz_no ";
    $queryrun = mysqli_query($conn,$query);
    echo "   <div class='main-content'> <h1 class='d-flex justify-content-center'>Quiz</h1><form>";
    $i=1;
    while($result = mysqli_fetch_assoc($queryrun)){
      echo "
      <div class='card'>
      <div class='container'>
      <h3>Ques $i.</h3>
      <label><h6>$result[ques]</h6></label><br> 
      <input type='radio'
        id='$result[ques_no] $result[option_1]'
        name='$result[ques_no]'
        value='$result[option_1]'>

        <label for='$result[ques_no] $result[option_1]'>
        $result[option_1]
        </label><br>

        <input type='radio' id='$result[ques_no] $result[option_2]' name='$result[ques_no]' value='$result[option_2]'>
        <label for='$result[ques_no] $result[option_2]'>$result[option_2]</label><br>
        <input type='radio' id='$result[ques_no] $result[option_3]' name='$result[ques_no]' value='$result[option_3]'>
        <label for='$result[ques_no] $result[option_3]'>$result[option_3]</label><br>
        <input type='radio' id='$result[ques_no] $result[option_4]' name='$result[ques_no]' value='$result[option_4]'>
        <label for='$result[ques_no] $result[option_4]'>$result[option_4]</label><br>
        </div>
        </div>
      ";
      $i++;
  }
  echo "</form> 
  <div class='d-flex justify-content-center'>
  <button class='btn btn-light' id='submit' onClick='submit($quiz_no,$roll_no)'>Submit</button> 
  </div></div>";
  $data = array("sub" => $selected_subject);
  }
?>

<script>
  function submit(quiz_no,roll_no)
  {
    var data = <?php echo json_encode($data); ?>;
    var sub = data['sub'];

    var results=document.getElementsByTagName("input");
    var array0 = []
    var k=0;
    for(i=0;i<results.length;i++){
      if(results[i].type=="radio" && results[i].checked)
      {
          k=k+1;
          var array1=[]
          array1.push(
          results[i].value,results[i].name)
          array0.push(array1)
      }
    }

    document.getElementById("submit").style.display = "none";
    var src = "upload.php?array="+array0+"&roll_no="+roll_no+"&quiz_no="+quiz_no+"&subject="+sub;
    window.location.href=src
    alert("Response Submitted")
  }

</script>
</body>
</html>

<!-- 
in quiz2 check if the quiz is already submitted if yes then display the result in quiz5


in upload create reponse is submitted 
and then clicking on a link comes to quiz5
and the result is displayed

a last place space is send everytime roll_no is migrated
from one place to other it can cause problem
 -->

