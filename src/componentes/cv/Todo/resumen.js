import React from "react";
import '../estilos/style.scss';
import image1 from '../../../imagenes/1.png';
import image2 from '../../../imagenes/2.png';
import image3 from '../../../imagenes/3.png';
import image4 from '../../../imagenes/4.jpg';

class ResumenTodo extends React.Component {
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
                <p>Mi nombre es Jorge Cruz García, tengo 28 años y soy Técnico Superior en Big Data y diseñador web autodidacta. Pareja y padre de la niña más hermosa del mundo.</p>
                <hr />
            </div>
        )
    }
}

export default ResumenTodo; 