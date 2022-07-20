import React from "react";
import './style.scss';
/* import Inicio from "../Inicio/inicio"; */
/* import AboutMe from "../aboutMe/about"; */
/* import Proyectos from "../proyectos/proyectos"; */
import Redes from "../redes/redes";

class Main extends React.Component {
    render () {
        return (
            <main className="contenedor-principal">
                {/* <Inicio /> */}
                {/* <AboutMe /> */}
                {/* <Proyectos /> */}
                <Redes />
            </main>
        )
    };
};

export default Main;