import React from 'react';
import './Styles/Navbar.css';

const Navbar = () => {
  return (
    <div className='container-fluid mt-2 d-flex flex-row align-items-center'>
      <div className="left">
        <img className='logo-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" alt="" />
      </div>
      <div className="mid">
        <ul className='d-flex flex-row my-0'>
          <div className="dropdown">
            <li className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Home
            </li>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="/">Main Home</a>
              <a className="dropdown-item" href="/">Home Article</a>
              <a className="dropdown-item" href="/">Landing Page</a>
            </div>
          </div>
          <li className=''>About</li>
          <div className="dropdown">
            <li className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Services
            </li>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="/">Our Service</a>
              <a className="dropdown-item" href="/">Service Detail</a>
            </div>
          </div><div className="dropdown">
            <li className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Blog
            </li>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="/">Blog List</a>
              <a className="dropdown-item" href="/">Blog Detail</a>
            </div>
          </div>
          <li className="">Contact</li>
        </ul>
      </div >
      <div className="right">
        <button className='Search-Button btn btn-outline-primary'>Join Us</button>
      </div>
    </div >
  );
};

export default Navbar;
