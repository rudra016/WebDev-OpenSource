import axios from "axios";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";

export default function Cart({username}) {
  const [displayCartData, setDisplayCartData] = useState([]);

  useEffect(() => {
    cartDisplay();
  }, []);

  async function deleteItem(username,color,title){
    
    await axios.delete(`http://localhost:8080/api/test/cart/${title}/${username}/${color}`)
    .then(response => {
      console.log(response);
      // Handle successful response
    })
    .catch(error => {
      console.error(error);
      // Handle error
    });

    const response = await axios.get('http://localhost:8080/api/test/carts');
    // Handle the response data
    console.log(response.data);
    let responseData = response.data;
    responseData = responseData.filter((item)=>item.username===username)
    console.log(responseData);

    setDisplayCartData(responseData);

  }

  async function updateCart(value,username,color,title,price){
  await axios.put(`http://localhost:8080/api/test/cart/${title}/${username}/${color}`, 
  {
    
      "title": title,
      "price": `$${price}`,
      "username": username,
      "quantity": value,
      "color": color

}
  )
  .then(response => {
    // Handle the response data
    console.log(response.data);
  })
  .catch(error => {
    // Handle the error
    console.error(error);
  });
  }

  async function cartDisplay() {
    try {
      const response = await axios.get('http://localhost:8080/api/test/carts');
      // Handle the response data
      console.log(response.data);
      let responseData = response.data;
      responseData = responseData.filter((item)=>item.username===username)
      console.log(responseData);

      setDisplayCartData(responseData);
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  }

  return (
    // <div>
    //   {displayCartData.map((item) => (
    //     <div key={item.id}>
    //         <span>{item.title}</span>
    //         <span>{item.username}</span>
    //     </div>
    //   ))}
    // </div>
    <div class="CartContainer">
      <center><h1 style={{color:"white"}}>Your Cart</h1></center>
    <div class="TableContainer">
        <table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Color</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove Product</th>

                </tr>
            </thead>
            <tbody>

              {
                displayCartData.map((item,index)=>{
                  return(
                    <CartItem item={item} index={index} username={username} updateCart={updateCart} deleteItem={deleteItem} />
                  )
                })
              }

                {/* <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                    <td>Cell 4</td>
                </tr>
                <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                    <td>Cell 4</td>
                </tr>
                <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                    <td>Cell 4</td>
                </tr>
                <tr>
                    <td>Cell 1</td>
                    <td>Cell 2</td>
                    <td>Cell 3</td>
                    <td>Cell 4</td> 
                </tr> */}
            </tbody>
        </table>
    </div>
</div>
  );
}
