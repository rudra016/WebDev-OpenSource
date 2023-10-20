import React from "react";
import { Link } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import logo from "../assets/images/Logo.png";
import { useState,useEffect } from "react"; 
import navbarPic from "../assets/icons/navbarPic.png";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Stack direction="row" className={`navbar ${scrolling ? "scrolling" : ""}`} >
      <Link to="/">
        <img
          src={navbarPic}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 10px" }}
        />
      </Link>
      <Stack direction="row" >
        <a className="a" href="">Home</a>
        <a className="a" href="#exercises">Exercises</a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
