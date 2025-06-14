import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Sandesh Khilari</h2>

      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#hackathon-section">Hackathons</a></li>
        <li><a href="#Blog">Blog</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
