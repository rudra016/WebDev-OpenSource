import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";  
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (item) => {
    setActiveDropdown(item);
  };

  const handleMouseLeave = () => {
    setActiveDropdown('');
  };

  return (
    <nav className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? "bg-primary" : "bg-transparent"}`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((item) => (
            <li key={item.id} 
                className={`${active === item.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
            >
              <Link to={item.path} onClick={() => setActive(item.title)}>
                {item.title}
              </Link>
              
              {item.submenu && activeDropdown === item.title && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <ul>
                    {item.submenu.map((subItem) => (
                      <li key={subItem.id}>
                        <Link to={subItem.path} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
