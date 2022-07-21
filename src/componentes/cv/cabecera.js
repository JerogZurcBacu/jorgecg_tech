import React from "react";
import './estilos/style.scss';

class Cabecera extends React.Component {
    render () {
        return (
            <div className="contenedor-cabecera">
                <div className="contenedor-buscador-cabecera">
                    <p>¿Quien es Jorge Cruz?</p>
                </div>
                <div className="contenedor-link-cabecera">
                    <ul className="lista-links-cabecera">
                        <li><a>Todo</a></li>
                        <li><a>Personal</a></li>
                        <li><a>Estudios</a></li>
                        <li><a>Experiencia</a></li>
                    </ul>
                </div>
            </div>
        )
    }
} 

export default Cabecera; 