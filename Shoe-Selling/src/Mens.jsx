import { useState ,useEffect } from "react"
import { MensProducts } from "./MensProducts"
import { Link } from "react-router-dom"
import "./css/mens.css"

export default function Mens() {
    const [menProductsArr,setMenProductsArr] = useState([])
    const [menfind,setmenFind] = useState("")

    useEffect(()=>{
        menfunc()
      },[menfind])

    function menfunc(){
    if (menfind === "" || menfind.trim() === "") {
      setMenProductsArr([]);
      return;
    }
            setMenProductsArr(
            MensProducts.filter((item) =>
            // item["title"].toLowerCase().includes(menfind.toLowerCase().trim())&&menfind.trim()  !==""
              (item["title"].toLowerCase().startsWith(menfind.toLowerCase().trim().slice(0,1))&&item["title"].toLowerCase().includes(menfind.toLowerCase().trim()))
              ||(menfind.length>=3 && item["title"].toLowerCase().includes(menfind.toLowerCase().trim()))
              // item["title"].toLowerCase().includes(state.toLowerCase().trim())
            )
          );

    }

    return (
        <>
        <form className="searchingflexbox">
            <div className="searching">
                {/* <h1>Search this site</h1> */}
                <h3>Click on search icon, then type your keyword.</h3>
                <div>
                    <input 
                    type="text" 
                    placeholder="Search . . ." 
                    required 
                    value={menfind} 
                    onChange={(e)=>setmenFind(e.target.value)}  
                    className="menSearch"
                    />
                </div>
            </div>
        </form>
        <div className="searchSuggMen">
                    {    
                    menProductsArr.map((item)=>{
                        return (
                            <div className="menItem">
                               <Link to={`/${item.title}`}>
                               <h3 className="menItem" style={{color:"black"}}>{item.title}</h3>
                               </Link> 
                            </div>
                        )
                    })
                    }
                    
        </div>
        
       <div class="top">
    <h2>Men</h2>
    <img src="https://images.unsplash.com/photo-1523309375637-b3f4f2347f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="" />
<p>Summer Essentials</p>
<h1>#JUST DO IT</h1>
<div class="summerInfo"><p>
    
    Move. Explore. Bring your boldest. </p><p>
    Get after summers endless possibilities with ready-for-anything fits.
    
  
    </p></div>

    <button  ><div><Link to="/allShoes">Shop</Link></div> 
  </button>
</div> 

{/* // <!-- <div class="shopButton"> <h2>Classic Kicks You'l Love</h2>
// </div>
// <div class="shoesHover"></div> --> */}





<section class="product"> 
    <h2 class="product-category">best selling</h2>
    <button class="pre-btn"><img src="https://cdn-icons-png.flaticon.com/128/2989/2989988.png" alt="" /></button>
    <button class="nxt-btn"><img src="https://cdn-icons-png.flaticon.com/128/2989/2989988.png" alt="" /></button>
    <div class="product-container">
        <div class="product-card">
            <div class="product-image">
       
                <img src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=1000&q=60" class="product-thumb" alt="" />
                <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
                <h2 class="product-Nike">Nike Air Force 1 '07 FlyEase</h2>
                <p class="product-short-description">about shoes..</p>
                <span class="price">$120</span>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
          
                <img src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bmlrZSUyMHNob2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60" class="product-thumb" alt="" />
                <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
                <h2 class="product-Nike">Nike</h2>
                <p class="product-short-description">about shoes..</p>
                <span class="price">$100</span>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
       
                <img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmlrZSUyMHNob2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=1000&q=60" class="product-thumb" alt="" />
                <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
                <h2 class="product-Nike">Nike</h2>
                <p class="product-short-description">about shoes..</p>
                <span class="price">$130</span>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
              
                <img src="https://images.unsplash.com/photo-1605408499391-6368c628ef42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5pa2UlMjBzaG9lfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60" class="product-thumb" alt="" />
                <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
                <h2 class="product-Nike">Nike</h2>
                <p class="product-short-description">about shoes..</p>
                <span class="price">$133</span>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
              
                <img src="https://media.istockphoto.com/id/1306254732/photo/white-sneaker-on-a-orange-and-pink-gradient-background-mens-fashion-sport-shoe-sneakers.jpg?s=612x612&w=0&k=20&c=5ox0aQ_xQXbdOqW91TWMsa_XiXFYup_sNqxhZQPz95c=" class="product-thumb" alt="" />
                <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
                <h2 class="product-Nike">Nike</h2>
                <p class="product-short-description">about shoes..</p>
                <span class="price">$20</span>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
               
                <img src="https://images.unsplash.com/photo-1597045566677-8cf032ed6634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60" class="product-thumb" alt="" />
                <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
                <h2 class="product-Nike">Nike</h2>
                <p class="product-short-description">about shoes..</p>
                <span class="price">$20</span>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
      
                <img src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60" class="product-thumb" alt="" />
                <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
                <h2 class="product-Nike">Nike</h2>
                <p class="product-short-description">about shoes..</p>
                <span class="price">$20</span>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
                
                <img src="https://img.freepik.com/premium-photo/beautiful-white-sports-sneaker_88775-1231.jpg?size=626&ext=jpg" class="product-thumb" alt="" />
                <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
                <h2 class="product-Nike">Nike</h2>
                <p class="product-short-description">about shoes..</p>
                <span class="price">$20</span>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
            
                <img src="https://img.freepik.com/premium-photo/khaki-running-sneakers-trendy-neon-light_158023-1571.jpg?size=626&ext=jpg" class="product-thumb" alt="" />
                <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
                <h2 class="product-Nike">Nike</h2>
                <p class="product-short-description">about shoes..</p>
                <span class="price">$20</span>
            </div>
        </div>
        <div class="product-card">
            <div class="product-image">
             
                <img src="https://img.freepik.com/premium-photo/running-sports-shoes-with-flying-laces_175682-3588.jpg?size=626&ext=jpg" class="product-thumb" alt="" />
                <button class="card-btn">add to wishlist</button>
            </div>
            <div class="product-info">
                <h2 class="product-Nike">Nike</h2>
                <p class="product-short-description">about shoes..</p>
                <span class="price">$20</span>
            </div>
        </div>
    </div>
</section>



<h2 class="thelastest">The Latest</h2>
<div class="thelastest">
    



<div class="imgColumn1 imgsize" >
    <img src="https://images.unsplash.com/photo-1585843736857-bd7438e55c67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Njd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=1000&q=60" alt="" />
    <img src="https://images.unsplash.com/photo-1604694059170-4e97188079a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTAxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=1000&q=60" alt="" />
    <img src="https://images.unsplash.com/photo-1530303848045-ce0a70903a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OTV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />


   
</div>
<div class="imgColumn2 imgsize" >
    <img src="https://images.unsplash.com/photo-1636718283028-bb6845dbf3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjQ1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
    <img src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTY2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="" />
    <img src="https://images.unsplash.com/photo-1612821745127-53855be9cbd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzR8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=1000&q=60" alt="" />
</div>
<div class="imgColumn3 imgsize" >
    <img src="https://images.unsplash.com/photo-1588117260148-b47818741c74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MzJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=1000&q=60" alt="" />
    <img src="https://images.unsplash.com/photo-1618453292507-4959ece6429e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=1000&q=60" alt="" />
    <img src="https://images.unsplash.com/photo-1609535766106-0864edad28e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OTZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
</div>


</div>

<div class="bottom">
    <p>Just In</p>
    <h1>NIKE AIR MAX PULSE</h1>
    <div class="bottomInfo"><p>Powered by the underground sounds of London comes a silhouette infused with an unreal sensation of</p>  <p>
        Air and durable design details, now in a new colour. </p>
        <p>
        Shop the Air Max Pulse in Cobblestone.
        </p></div>
       
    <button ><div><Link to="/allShoes">Shop</Link></div>
    </button>
</div>
        <footer>
        <div class="first-line">
<ul>
    <li><a href="">FIND A STORE</a> </li>
    <li><a href=""> BECOME A MEMBER</a></li>
    <li><a href="">Send Us Feedback</a> </li>
    <li><a href="">STUDENT DISCOUNT</a> </li>
</ul>
        </div>

        <div class="second-line">
           <ul>
            <li> <a href="">order status</a></li>
            <li><a href="">Payment Options</a> </li>
            <li><a href="">Contact us on nike.com</a> </li>
            <li><a href="">Contact us on other</a> </li>
           </ul>
        </div>
       
        <div class="third-line">
            <ul>
                <li>ABOUT NIKE</li>
                <li><a href="">News</a> </li>
                <li><a href="">Careers</a> </li>
                <li><a href="">Investors</a> </li>
               
            </ul>
        </div>
        
        <div class="forth-line">
            <div>  <button> <img src="https://cdn-icons-png.flaticon.com/128/1384/1384015.png" alt="" /></button></div>
          <div>  <button> <img src="https://cdn-icons-png.flaticon.com/128/2168/2168336.png" alt="" /></button></div>
          <div>  <button> <img src="https://cdn-icons-png.flaticon.com/128/1051/1051309.png" alt="" /></button></div>
          
        </div>
        </footer>

        </>
    )
}