import React from "react";
import { NavLink } from 'react-router-dom';
import { menuIt } from './menuit';
import './estilos/navbar.scss';

class NavBar extends React.Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render () {
    return (
      <div className="contenedor-navbar">
        <div className="contenedor-logo" />
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fa-solid fa-bars-staggered'}></i>
        </div>
        <div className="contenedor-nav">
          <ul className={this.state.clicked ? 'nav-menu activo' : 'nav-menu'}>
            {menuIt.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink to={item.url} className={item.cName} id={item.id} activeClassName="link_activo">
                  {item.title}  
                  </NavLink>  
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default NavBar;