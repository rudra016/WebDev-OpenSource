var c1_votes=0;
var c2_votes=0;
var c3_votes=0;
var poll_name="";
var cand_1="";
var cand_2="";
var cand_3="";

if(sessionStorage.getItem("poll-name")==null){

}
else{
    $(".poll-name").text(sessionStorage.getItem("poll-name"));
    $(".poll-name-res").text(sessionStorage.getItem("poll-name"));
}

if(sessionStorage.getItem("c1-name")==null){

}
else{
    $("#cn-1").text(sessionStorage.getItem("c1-name"));
    $(".c1-nme").text(sessionStorage.getItem("c1-name")+":");
}

if(sessionStorage.getItem("c2-name")==null){

}
else{
    $("#cn-2").text(sessionStorage.getItem("c2-name"));
    $(".c2-nme").text(sessionStorage.getItem("c2-name")+":");
}

if(sessionStorage.getItem("c3-name")==null){

}
else{
    $("#cn-3").text(sessionStorage.getItem("c3-name"));
    $(".c3-nme").text(sessionStorage.getItem("c3-name")+":");
}

if(sessionStorage.getItem("c1_votes")==null){

}
else{
    $(".c1-votes").text(sessionStorage.getItem("c1_votes")+" votes");
}

if(sessionStorage.getItem("c2_votes")==null){

}
else{
    $(".c2-votes").text(sessionStorage.getItem("c2_votes")+" votes");
}

if(sessionStorage.getItem("c3_votes")==null){

}
else{
    $(".c3-votes").text(sessionStorage.getItem("c3_votes")+" votes");
}







$(".btn-1").click(function(){
    c1_votes++;
    alert("You have voted for "+$("#cn-1").text());
    sessionStorage.setItem("c1_votes",c1_votes);
})

$(".btn-2").click(function(){
    c2_votes++;
    alert("You have voted for "+$("#cn-2").text());
    sessionStorage.setItem("c2_votes",c2_votes);
})

$(".btn-3").click(function(){
    c3_votes++;
    alert("You have voted for "+$("#cn-3").text());
    sessionStorage.setItem("c3_votes",c3_votes);
})

$(".save-btn").click(function(){
    poll_name=document.getElementById("pl-input").value;
    cand_1=document.getElementById("cn1-inp").value;
    cand_2=document.getElementById("cn2-inp").value;
    cand_3=document.getElementById("cn3-inp").value;
    sessionStorage.setItem("poll-name",poll_name);
    sessionStorage.setItem("c1-name",cand_1);
    sessionStorage.setItem("c2-name",cand_2);
    sessionStorage.setItem("c3-name",cand_3);
    window.location.href = 'index.html';

  })


 

