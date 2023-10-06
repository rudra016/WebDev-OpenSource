import { useEffect, useState } from "react"
import "./App.css"
import "./style.css"
import {products} from "./ProductsData"
import { Routes , Route, useNavigate } from "react-router-dom"
import ShoeCard from "./ShoeCard"
import Cart from "./Cart"
import MainBody from "./MainBody"
import Register from "./Register"
import Login from "./Login"
import NewFeatured from "./NewFeatured"
import Mens from "./Mens"
import Kids from "./Kids"
import AllShoes from "./allshoes"
import Womens from "./Womens"
import { MensProducts } from "./MensProducts"
export default function App(){
    const [translate,setTranslate] = useState(0)
    const [colorindex,setColorIndex] = useState(0)
    const [val,setVal] = useState(false)
    const [find,setFind] = useState("")
    const [productsArr,setProductsArr] = useState([])
    const [state,setState] = useState({
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
          {
            code: "black",
            img: "data:image/jpeg;base64,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",
          },
          {
            code: "darkblue",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyGl2bhYV1x9JvqDy69Lo756u5xqcItmoJrw&usqp=CAU",
          },
        ],
      })

      const [dataFromChild, setDataFromChild] = useState("");

      const handleDataFromChild = (data ) => {
        setDataFromChild(data);
      };

      useEffect(()=>{
        // setProductsArr(()=>{
        //     products.filter((item)=> item.title.includes(find) )
        // })
        func()
        console.log(productsArr)
      },[find])
      const navigate = useNavigate()
      function func(){
    if (find === "" || find.trim() === "") {
      setProductsArr([]);
      return;
    }
            setProductsArr(
            products.filter((item) =>
            // item["title"].toLowerCase().includes(find.toLowerCase().trim())&&find.trim()  !==""
              (item["title"].toLowerCase().startsWith(find.toLowerCase().trim().slice(0,1))&&item["title"].toLowerCase().includes(find.toLowerCase().trim()))
              ||(find.length>=3 && item["title"].toLowerCase().includes(find.toLowerCase().trim()))
              // item["title"].toLowerCase().includes(state.toLowerCase().trim())
            )
          );

    }
    function slides(item){
        setTranslate((Number(item.id))-1)
        setState(item)
    }
  return(
    <>
    <Routes>
    <Route path="/" element={  
    <MainBody 
    find={find}  
    setFind={setFind}
    translate={translate}
    productsArr={productsArr}
    state={state}
    colorindex={colorindex}
    setColorIndex={setColorIndex}
    val={val}
    setVal={setVal}
    slides={slides}
    username={dataFromChild}
    setUsername={setDataFromChild}
    />} />
    {
        MensProducts.map((item)=>{
            return(
                <Route path={item.title} element={<ShoeCard   
                item={item}
                title={item.title}
                price={item.price}
                username={dataFromChild}
                />} />
            )
        })
    }
    <Route path="/register" element={<Register />}/>
    <Route path="/login" element={<Login handleDataFromChild={handleDataFromChild} />}/>
    <Route path="/newfeatured" element={<NewFeatured />}/>
    <Route path="/mens" element={<Mens />}/>
    <Route path="/womens" element={<Womens />}/>
    <Route path="/kids" element={<Kids />}/>
    <Route path="/allshoes" element={<AllShoes />}/>
    {/* { dataFromChild!=='' &&   <Route path="/cart" element={<Cart username={dataFromChild} />}/>} */}
    <Route path="/cart" element={<Cart username={dataFromChild} />}/>
    {true && <Route path="/demo/trial" element={<h1>hello</h1>}/>}
    <Route path="*" element={<h1>Page Not Found</h1>}/>
    </Routes> 
    </>
  )
}