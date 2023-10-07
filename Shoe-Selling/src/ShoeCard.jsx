import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function ShoeCard({ item , title , price , username}){
    const [colorindex , setColorIndex] = useState(0);
    const [quantity , setQuantity] = useState(1);
    const navigate = useNavigate()
    //   const { usernames, titles, prices , colors } = cardData;
      async function handleAddToCart(cardData){
        try {
            await axios.post('http://localhost:8080/api/test/cart', cardData).then(
              res =>{
                console.log(res.data);
                alert("Added to cart")
              }
            )
            .catch(error=>{
              console.error('Request failed:');
              alert("user already registered")
            })
            // console.log(res)
          } catch (e) {
            alert(e)
          }
  
        };
      
    return(
        <>

<img src={item.colors[colorindex].img} alt="" className="productImg"/>
        <div className="productDetails">
            <h1 className="productTitle">{title}</h1>
            <h2 className="productPrice">${price}</h2>
            <p className="productDesc">Lorem ipsum dolor sit amet consectetur impal adipisicing elit. Alias assumenda
                dolorum
                doloremque sapiente aliquid aperiam.</p>
            <div className="colors">
                <div className="color" onClick={()=>setColorIndex(0)} style={{backgroundColor:item.colors[0].code}}></div>
                <div className="color" onClick={()=>setColorIndex(1)} style={{backgroundColor:item.colors[1].code}}>  </div>
                {/* {
                    products.map((item)=>{
                        <div classNameName="color">{item.colors}</div>
                    })
                } */}
            </div>
            <div className="sizes">
                <div className="size">42</div>
                <div className="size">43</div>
                <div className="size">44</div>
            </div>
            <label for="points" style={{fontWeight:"bold" , fontSize:"large"}}>Quantity:</label>
            <input 
            type="number" 
            min="1" 
            id="points" 
            name="points" 
            step="1" 
            style={{padding:"5px"}}
            value={quantity}
            onChange={(e)=>setQuantity(e.target.value)}
            />
            <button className="productButton" onClick={()=>handleAddToCart({
                    "title":title,
                    "price":`$${price}`,
                    "username":username,
                    "quantity":quantity,
                    "color":item.colors[colorindex].code
                
            })}>Add to Cart</button>
        </div>

<h1 style={{color:"black" , cursor:"pointer"}} onClick={()=>navigate(-1)}>Go Back</h1>
        </>
    )
}