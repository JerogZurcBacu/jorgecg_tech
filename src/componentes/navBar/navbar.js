import React from "react";
import './navbar.scss';

function NavBar() {
  return (
    <div className="contenedor-navbar">
      <div className="contenedor-logo" />
      <div className="contenedor-nav">
        <ul>
          <li>Inicio</li>
          <li>Sobre Mi</li>
          <li>Proyectos</li>
          <li>Proximamente</li>
          <li>Redes</li>
          <li>CV</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;