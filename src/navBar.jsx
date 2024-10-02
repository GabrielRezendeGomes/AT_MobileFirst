import React, { useState } from 'react';
import './Navbar.css';
import ToggleSwitch from "./ToggleSwitch"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar" id='home'>
      <div className="navbar-logo"><img src="src\assets\livro-logo.png" alt="logo-livro" width={"30rem"} height={"30rem"} /></div>
      <ToggleSwitch/>
      <button className="navbar-toggle" onClick={toggleMenu}>
        {/* Ícone de hambúrguer */}
        <span className="hamburger-icon"></span>
      </button>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li className="navbar-item"><a href="#home">Home</a></li>
        <li className="navbar-item"><a href="#comprar">Comprar</a></li>
        <li className="navbar-item"><a href="#endereço">Endereço</a></li>
        <li className="navbar-item"><a href="#contact">Contato</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
