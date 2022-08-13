import React from "react";
import '../estilos/style.scss';

class LinksEst extends React.Component {
    render () {
        return (
            <div className="contenedor-links">
                <div className="sub-contenedpr-links">
                    <hr />
                    <div className="icono-titulo-links">
                        <i class="fa-solid fa-person"></i>
                        <h3 className="url">https://www.freecodecamp.org/JerogZurcG</h3>
                    </div>
                    <h3 className="titulo-link"><a href="https://www.freecodecamp.org/JerogZurcG" target="_blank" rel="noreferrer">Free Code Camp</a></h3>
                    <p>Certificación en diseño web resp. y JavaScript ...</p>
                    <hr />
                </div>
                <div className="sub-contenedpr-links">
                    <hr />
                    <div className="icono-titulo-links">
                        <i class="fa-solid fa-graduation-cap"></i>
                        <h3 className="url">https://capacitateparaelempleo.org/</h3>
                    </div>
                    <h3 className="titulo-link"><a href="https://capacitateparaelempleo.org/" target="_blank" rel="noreferrer">Dip. Técnico Superior en Big Data</a></h3>
                    <p>Diplomado en linea con validez oficial</p>
                    <hr />
                </div>
                <div className="sub-contenedpr-links">
                    <hr />
                    <div className="icono-titulo-links">
                        <i class="fa-solid fa-briefcase"></i>
                        <h3 className="url">https://ceneval.edu.mx/</h3>
                    </div>
                    <h3 className="titulo-link"><a href="https://ceneval.edu.mx/examenes-ingreso-exani_i/" target="_blank" rel="noreferrer">Bachillerato Completo</a></h3>
                    <p>Bachillerato concluido con certificado</p>
                    <hr />
                </div>
            </div>
        )
    }
}

export default LinksEst; 