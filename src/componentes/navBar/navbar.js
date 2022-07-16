import React from "react";
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
                  <a className={item.cName} href={item.url} id={item.id}>
                  {item.title}  
                  </a>  
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