import { useState } from "react"

export default function CartItem({item,index, username,updateCart , deleteItem}){
    const [productQuantity, setProductQuantity] = useState(item.quantity);
    return(
        <>
                    <tr key={index}>
                    <td>{item.title}</td>
                    <td>{item.color}</td>
                    <td>
                    <input 
                    type="number" 
                    min="1" 
                    id="points" 
                    name="points" 
                    step="1" 
                    style={{padding:"5px" , backgroundColor:"transparent" , color:"white" , outline:"none"}}
                    value={productQuantity}
                    onChange={(e)=>{
                      setProductQuantity(e.target.value)
                      updateCart(e.target.value,username,item.color,item.title,item.price)
                    }}
            />
                    </td>
                    <td>{item.price}</td>
                    <td style={{color:"red" , fontWeight:"bolc"}} onClick={()=>deleteItem(username,item.color,item.title)}>Remove</td>
                </tr>
        </>
    )
}