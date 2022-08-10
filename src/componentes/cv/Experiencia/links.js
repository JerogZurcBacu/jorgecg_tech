import React from "react";
import '../estilos/style.scss';

class LinksExp extends React.Component {
    render () {
        return (
            <div className="contenedor-links">
                <div className="sub-contenedpr-links">
                    <hr />
                    <div className="icono-titulo-links">
                        <i class="fa-solid fa-person"></i>
                        <h3 className="url">https://es.m.personal.com</h3>
                    </div>
                    <h3 className="titulo-link">Información personal</h3>
                    <p>Información personal, intereses, gustos, pasatiempos, etc...</p>
                    <hr />
                </div>
                <div className="sub-contenedpr-links">
                    <hr />
                    <div className="icono-titulo-links">
                        <i class="fa-solid fa-graduation-cap"></i>
                        <h3 className="url">https://www.estudios.com</h3>
                    </div>
                    <h3 className="titulo-link">Información Académica</h3>
                    <p>Información académica, escolar, cursos, diplimados, etc...</p>
                    <hr />
                </div>
                <div className="sub-contenedpr-links">
                    <hr />
                    <div className="icono-titulo-links">
                        <i class="fa-solid fa-briefcase"></i>
                        <h3 className="url">https://laboral.mx</h3>
                    </div>
                    <h3 className="titulo-link">Información Laboral</h3>
                    <p>Información de proyectos y empleos anteriores.</p>
                    <hr />
                </div>
            </div>
        )
    }
}

export default LinksExp; 