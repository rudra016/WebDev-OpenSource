<?php

$conn = mysqli_connect("localhost","root","","erp");
$elements =$_GET['array'];
$elements = explode(',', $elements);
$roll_no = $_GET['roll_no'];
$quiz_no = $_GET['quiz_no'];
$sub1 = $_GET['subject'];

$sub2=$sub1;
$selected_subject="_quiz_result";
$sub2.=$selected_subject;
$i=sizeof($elements);

$ll=0;
$query0 = "INSERT INTO $sub2 (roll_no, quiz_no, marks) VALUES ($roll_no,$quiz_no,-1)";
$query0run=mysqli_query($conn,$query0);

$iszero=-1;
for($j=0;$j<$i/2;$j++){

    $selected_option = $elements[$ll];
    $ll=$ll+1;

    $ques_no=$elements[$ll];
    $ll=$ll+1;
    
    $query4="SELECT marks FROM $sub2 WHERE roll_no=$roll_no";
    $query4run=mysqli_query($conn,$query4);
    while($resultt=mysqli_fetch_assoc($query4run)){
        if($resultt['marks']==-1){
            $oo=-1;
        }
        else{
            $oo=0;
        }
    }

    $query2="SELECT correct_option FROM $sub1 WHERE ques_no='$ques_no' and quiz_no='$quiz_no'";
    $query2run = mysqli_query($conn,$query2);

    while($result=mysqli_fetch_array($query2run)){
        if($result['correct_option']==$selected_option){
                if($oo==-1){
                    $query3="UPDATE $sub2 SET marks=marks+2 where roll_no=$roll_no and quiz_no = $quiz_no";
                    $query3run = mysqli_query($conn,$query3);
                    $iszero=0;
                }
                else{
                    $query3="UPDATE $sub2 SET marks=marks+1 where roll_no=$roll_no and quiz_no = $quiz_no";
                    $query3run = mysqli_query($conn,$query3);
                    $iszero=0;
                }
        }
    }
    if($j+1==$i/2 && $iszero==-1){
        $query5="UPDATE $sub2 SET marks=0 where roll_no=$roll_no and quiz_no = $quiz_no";
        $query5run = mysqli_query($conn,$query5);
        }
}

?>
<?php
include 'already_submitted.php';
?>