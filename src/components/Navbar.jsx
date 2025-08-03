import React from "react";
import "../style/Navbar.css";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="pixel-navbar">
      <div className="logo">
        <a href="/">YEISON.DEV</a>
      </div>

      {/* Botón hamburguesa */}
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <div className="nav-right">
        <ul className="nav-links">
          <li><a href="#about" className="active">Sobre mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
