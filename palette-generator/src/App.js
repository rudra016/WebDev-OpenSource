import React from 'react'
import Home from "./pages/Home"
import Generator from "./pages/Generator"
import Palettes from "./pages/Palettes"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Toaster} from "react-hot-toast"
import Favourites from './pages/Favourites';
const  App = () => {
  return (
    <div>
      <Toaster position="bottom-center" reverseOrder={false}/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/generator" element={<Generator/>}/>
          <Route path="/palettes" element={<Palettes/>}/>
          <Route path="/favourites" element={<Favourites/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App