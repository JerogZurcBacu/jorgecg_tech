import React from "react";
import '../estilos/style.scss';
import image1 from '../../../imagenes/1.png';
import image2 from '../../../imagenes/2.png';
import image3 from '../../../imagenes/3.png';
import image4 from '../../../imagenes/4.jpg';

class ResumenEst extends React.Component {
    render () {
        return (
            <div className="contenedor-resumen">
                <h1>Jorge Cruz García</h1>
                <div className="contenedor-ovalo-resumen-res">Resumen
                </div>
                <div className="contenedor-img-res">
                    <img src={image1} alt="imagen1" />
                    <img src={image2} alt="imagen2" />
                    <img src={image3} alt="imagen3" />
                    <img src={image4} alt="imagen4" />
                </div>
                <hr />
                <p>Bachillerato concluido, Técnico superior en BigData con validez oficial y en constante preparación y en búsqueda de adquirir nuevos conocimientos para ponerlos en practica</p>
                <hr />
            </div>
        )
    }
}

export default ResumenEst; 