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
                        <h3 className="url">https://p1stache.com/</h3>
                    </div>
                    <h3 className="titulo-link"><a href="https://p1stache.com/" target="_blank" rel="noreferrer">Desarrollador Front End Jr</a></h3>
                    <p>Marzo 2022 a Julio 2022</p>
                    <hr />
                </div>
                <div className="sub-contenedpr-links">
                    <hr />
                    <div className="icono-titulo-links">
                        <i class="fa-solid fa-graduation-cap"></i>
                        <h3 className="url">https://jorgecg.tech/</h3>
                    </div>
                    <h3 className="titulo-link"><a href="https://bacu.jorgecg.tech/" target="_blank" rel="noreferrer">Diseñador y desarrollador web (Freelance)</a></h3>
                    <p>Julio 2021 a Marzo 2022</p>
                    <hr />
                </div>
                <div className="sub-contenedpr-links">
                    <hr />
                    <div className="icono-titulo-links">
                        <i class="fa-solid fa-briefcase"></i>
                        <h3 className="url">https://yoyoso.com.co/</h3>
                    </div>
                    <h3 className="titulo-link"><a href="https://yoyoso.com.co/" target="_blank" rel="noreferrer">Administrador E-commerce</a></h3>
                    <p>Septiembre 2020 a Junio 2021</p>
                    <hr />
                </div>
            </div>
        )
    }
}

export default LinksExp; 