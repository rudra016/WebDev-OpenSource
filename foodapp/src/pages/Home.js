
import { Navbar } from '../components/Navbar';
import { Animatedcur } from '../components/Animatedcur';
import sData from '../components/data';
import { Card } from '../components/Card';
import { Footer } from '../components/Footer';
import { Carousal } from '../components/Carousal';

function ncard(val){
  return <>
  <div key={val.id} style={{display:"flex",justifyContent:"space-evenly",flexDirection:"column"}}>
<Card 
link={val.link}
title={val.title}
price={val.price}
size={val.size}

 />
 </div>
  </>
}

export const Home = () => {
  return (
    <>
    
    <Animatedcur />
    <div><Navbar /></div>
    <div><Carousal /></div><br />
    <div style={{display:'flex',flexWrap:"wrap",alignContent:"space-evenly",color:"black"}}>
    
    {sData.map(ncard)}
    
    </div>
    <div><Footer /></div>
    </>
  )
}
