
import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import {Home} from "./pages/Home";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { Login } from './pages/Login';
function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/login' element={<Login />}   />
          </Routes>
        </div>


      </Router>
    </>
  );
}

export default App;
