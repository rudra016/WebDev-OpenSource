import React from 'react'
import "./Navbar.css";
import {Link} from 'react-router-dom';

export const Navbar = () => {
  return (<>
    <div>
    <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
  <Link className="navbar-brand fs-1 fst-italic" to="/">
      FoodSwift
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="nav justify-content-end fs-4" >
        <li className="nav-item">
          <Link className="nav-link" id='navlink' to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id='navlink' to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" id='navlink' to="/signup">Register</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    
    </div>

</>

  )
}

// class="sc-1hez2tp-0 sc-fGSyRc dMkcNo"