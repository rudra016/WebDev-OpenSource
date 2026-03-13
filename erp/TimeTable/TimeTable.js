
  let httpRequest = new XMLHttpRequest();
  let el =document.getElementsById("p")
  el.onClick=function(){
    el.innerHTML="fffffffff"
    httpRequest.onreadystatechange=postAjaxFunction;
    httpRequest.open("POST","TimeTable.php");
    httpRequest.setReqestHeader("Content-Type","application/x-www-form-urlencoded");
    // httpRequest.send("email-")
  }
  function postAjaxFunction(){
    if(httpRequest.readyState===XMLHttpRequest.DONE){
        if(httpRequest.status===200){
            var response =JSON.parse(httpRequest.responseText);
            alert(response.name)
        }else{
            alert("something went wrong")
        }
    }
  }