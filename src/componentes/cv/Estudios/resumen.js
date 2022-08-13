import React from "react";
import '../estilos/style.scss';
import image5 from '../../../imagenes/5.png';
import image6 from '../../../imagenes/6.png';
import image7 from '../../../imagenes/7.png';

class ResumenEst extends React.Component {
    render () {
        return (
            <div className="contenedor-resumen">
                <h1>Jorge Cruz García</h1>
                <div className="contenedor-ovalo-resumen-res">Resumen
                </div>
                <div className="contenedor-img-res">
                    <img src={image5} alt="imagen5" />
                    <img src={image6} alt="imagen6" />
                    <img src={image7} alt="imagen7" />
                </div>
                <hr />
                <p>Bachillerato concluido, Técnico superior en BigData con validez oficial y en constante preparación y en búsqueda de adquirir nuevos conocimientos para ponerlos en practica</p>
                <hr />
            </div>
        )
    }
}

export default ResumenEst; 