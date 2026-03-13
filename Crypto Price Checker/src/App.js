import React from 'react'
import Navbar from './Component/Navbar'
import Landing from './Component/Landing'
import Coverage from './Component/Coverage'
import Feature from './Component/Feature'
import Market from './Component/Market'
import SearchCoin from './Component/SearchCoin'
import Testimonials from './Component/Testimonials'
import OurSocials from './Component/OurSocials'
// import DataTable from './Component/DataTable'  

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <Landing />
      <hr />
      <Coverage />
      <hr />
      <Feature />
      <hr />
      <Market />
      <hr />
      <SearchCoin />
      <hr />
      <Testimonials />
      <hr />
      <OurSocials />
    </div>
  )
}

export default App