import Home from "./pages/Home.jsx"
import Favourite from './pages/Favourite';
import Generator from "./pages/Generator";
import Flags from "./pages/Flags"
import { Toaster } from 'react-hot-toast';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
          <>
          <Toaster position="top-right" toastOptions={{
          success:{
            theme:{
              primary:'#4aed88',
            }
          } 
        }}/>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/favourites" element={<Favourite />}/>
                <Route path="/generator" element={<Generator />}/>
                <Route path="/flags" element={<Flags />}/>
              </Routes>
          </BrowserRouter>
          </>
  );
}
export default App;