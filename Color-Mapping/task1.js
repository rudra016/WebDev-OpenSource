 const box=document.querySelector(".box")

 box.addEventListener("mousemove",function(mousedetails){

  var boxLocation=box.getBoundingClientRect()
  var  inX=mousedetails.clientX - boxLocation.left;
  var  inY=mousedetails.clientY - boxLocation.top;

  if( inX<boxLocation.width/2){
    var greencolor=gsap.utils.mapRange(0,boxLocation.width/2,255,0, inX);
    gsap.to(box,{

     backgroundColor:`rgb(134,${greencolor},125)`,
    

    });
  }
  else if(inX<boxLocation.width){
   var bluecolor=gsap.utils.mapRange(boxLocation.width,boxLocation.width/2,255,0, inX);
   gsap.to(box,{

    backgroundColor:`rgb(124,43,${bluecolor})`,
   

   });
  }
  else if(inY.boxLocation.height/2){
    var redcolor=gsap.utils.mapRange(0,boxLocation.height/2,255,0,inY);
    gsap.to(box,{
      backgroundColor: `rgb( ${bluecolor},0,0)`,
    });

  }
  else{

  }
  

 })
  