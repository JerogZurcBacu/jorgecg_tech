import React from "react";
import '../estilos/style.scss';
import image8 from '../../../imagenes/8.png';
import image9 from '../../../imagenes/9.png';
import image10 from '../../../imagenes/10.png';

class ResumenExp extends React.Component {
    render () {
        return (
            <div className="contenedor-resumen">
                <h1>Jorge Cruz García</h1>
                <div className="contenedor-ovalo-resumen-res">Resumen
                </div>
                <div className="contenedor-img-res">
                    <img src={image8} alt="imagen8" />
                    <img src={image9} alt="imagen9" />
                    <img src={image10} alt="imagen10" />
                </div>
                <hr />
                <p>1 año de experiencia laboral en desarrollo web, 3 años en administración de ecommerce, y 2 años como depurador de datos / big data. Experiencia en diseño, mkt digital, contenido, campañas... </p>
                <hr />
            </div>
        )
    }
}

export default ResumenExp; 