import React from "react";
import './estilos/style.scss';
import Cabecera from "./cabecera";
import Resumen from "./resumen";
import Links from "./links";
 
class Cv extends React.Component {
    render () {
        return (
            <div className="contenedor-cv">
                <div className="contenedor-cabecera-cv">
                    <Cabecera />
                </div>
                <div className="contenedor-resumen-cv">
                    <Resumen />
                </div>
                <div className="contenedor-links-cv">
                    <Links />
                </div>
                <div className="contenedor-footer-cv">

                </div>
            </div>
        )
    }
}

export default Cv; 