
import { Navbar } from '../components/Navbar';
import { Animatedcur } from '../components/Animatedcur';
import sData from '../components/data';
import { Card } from '../components/Card';
import { Footer } from '../components/Footer';
import { Carousal } from '../components/Carousal';

function ncard(val) {
  return <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12'>
    <Card
      link={val.link}
      title={val.title}
      price={val.price}
      size={val.size}
    />
  </div>
}

export const Home = () => {
  return (
    <>
      <Animatedcur />
      <Navbar />
      <Carousal />
      <div className='container'>
        <div className='row justify-content-center align-items-center'>
          {sData.map(ncard)}
        </div>
      </div>
      <Footer />
    </>
  )
}
