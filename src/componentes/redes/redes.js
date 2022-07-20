import React from "react";
import './style.scss';
import Continuar from '../continuar/continuar';

class Redes extends React.Component {
    render () {
        return (
            <div className="contenedor-redes">
                <h1 id="h1-redes">Sigueme en redes</h1>
                <div className="sub-contenedor-redes">
                    <div className="contenedor-circulos-redes">
                        <a href="https://github.com/JerogZurcBacu" target="_blank" rel="noreferrer">
                            <div className="circulos-redes" id="github"/>
                        </a>
                    </div>
                    <div className="contenedor-circulos-redes">
                        <a href="https://www.instagram.com/elsenorito_jorge/" target="_blank" rel="noreferrer">
                            <div className="circulos-redes" id="instagram"/>
                        </a>
                    </div>
                    <div className="contenedor-circulos-redes">
                        <a href="https://twitter.com/JorgeCrossG1" target="_blank" rel="noreferrer">
                            <div className="circulos-redes" id="twitter"/>
                        </a>                   </div>
                    <div className="contenedor-circulos-redes">
                        <a href="https://www.linkedin.com/in/jerogzurc/" target="_blank" rel="noreferrer">
                            <div className="circulos-redes" id="linkedin"/>
                        </a>                    </div>
                    <div className="contenedor-circulos-redes">
                        <a href="mailto:hola.jorge.c@jorgecg.tech">
                            <div className="circulos-redes" id="mail"/>
                        </a>                </div>
                </div>        
                <Continuar />
            </div>
        )
    }
}

export default Redes;