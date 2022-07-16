import React from "react";
import './estilos/style.scss';

class AboutMe extends React.Component {
    render () {
        return (
            <div className="contenedor-about">
                <div className="contenedor-texto-am">
                    <h1>Sobre Mi</h1>
                    <p>
                        Mi nombre es <span className="sp-azul">Jorge Cruz García</span>, tengo 28 años y soy <span className="sp-rosa">Técnico Superior en Big Data</span> y <span className="sp-amarillo">diseñador web</span> autodidacta. Pareja y padre de la niña más hermosa del mundo.
                    </p>
                    <p>
                        Me gusta aprender <span className="sp-verde">cosas nuevas</span> todo el tiempo, desde lo relacionado con mi <span className="sp-amarillo">carrera</span> y/o <span className="sp-azul">profesión</span> como las cosas más raras e improvisadas porque, <span className="sp-rosa">¿por que no?</span>.
                    </p>
                    <p>
                        En los últimos años, he buscado <span className="sp-azul">especializarme</span> en el <span className="sp-amarillo">diseño web</span>, por lo que he desarrollado <span className="sp-rosa">habilidades</span> y <span className="sp-verde">conocimientos</span> en...
                    </p>
                </div>
                <div className="contenedor-habilidades-am">

                </div>
            </div>
        )
    };
};

export default AboutMe;