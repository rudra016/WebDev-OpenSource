import React from 'react'
import "./css/newfeatured.css"
import nikeshoe from './css/nikeshoe.mp4'
import ReactPlayer from 'react-player';
export default function NewFeatured() {

    return (
<>
      <section>
   <div class="sectionimg">
    <div class="vid">
  
       <img src="https://wallpaperaccess.com/full/193089.jpg" alt="" width="2000px" height="800px" />
 {/* <video src="./css/nikeshoe.mp4" muted autoplay loop play-inline  width="2000vh" height="700px" type="video/mp4"/> */}
 {/* <video> <source src='' /></video> */}
           {/* <video src="nikeshoe" typeof='video/mp4'></video> */}
            {/* <img src="https://media1.giphy.com/media/LqJBnt5oLGkwhd3U9f/giphy.gif?cid=ecf05e474eqgl52die3b9ffob3lekwt4jed7d0bmnvwmvm6z&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="" /> */}
     </div>
    <div class="txt">  <h3 >Nike Air</h3><p class="nikeair">Feel The Drip</p>
      
    </div>
</div>




<div class="ads"> 
    <div><h1 id="newarrival"> New Arrival</h1>
        <div class="shoesinfo">
            
  <h1 class="shoesheadname">Nike Air Max 97</h1>
     <div class="second-page">
      
        <div class="second-page-down">
          
        <div class="second-page-left">
            <div class="specs">
           
                <h3>Colorway</h3>
                <p>Black bullet</p>
            </div>
            <div class="batttery-left">
            <div class="specs">
            
                <h3>Price</h3>
                <p>$150</p>
            </div>
            <div class="specs">
               
                <h3> Category</h3>
                <p>Men's Sports</p>
            </div>
            
        </div>
            <div class="specs">
           
                <h3>Release On
                </h3>
                <p>2024 </p>
            </div>
            
       
        </div>
        <img src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/uk9r05zbmzsg9prcktps/air-max-97-shoes-EBZrb8.png"alt="" class="shoeinfoimg"/>
 </div>
</div>
</div>
</div>

<div class="nikeairimg">
    <div class="1">
    <div class="img1"><img src="https://wallpaperaccess.com/full/1929709.jpg"alt="" /></div>
   
    <div class="img2"><img src="https://wallpaperaccess.com/full/5276253.jpg"alt="" /></div>
</div>
<div class="2">
    <div class="img3"><img src="https://wallpaperaccess.com/full/5276214.jpg"alt="" /></div>
    <div class="img4"><img src="https://wallpapercave.com/dwp1x/wp5001671.jpg"alt="" /></div>
</div>
</div>
 
<div class="comingsoon">Coming Soon...</div>
</div>
</section>
  
            </>
    );
  }


