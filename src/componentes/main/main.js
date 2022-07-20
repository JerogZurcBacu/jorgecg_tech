import React from "react";
import './style.scss';
/* import Inicio from "../Inicio/inicio"; */
/* import AboutMe from "../aboutMe/about"; */
/* import Proyectos from "../proyectos/proyectos"; */
/* import Redes from "../redes/redes"; */
import Cv from "../cv/cv";

class Main extends React.Component {
    render () {
        return (
            <main className="contenedor-principal">
                {/* <Inicio /> */}
                {/* <AboutMe /> */}
                {/* <Proyectos /> */}
                {/* <Redes /> */}
                <Cv />
            </main>
        )
    };
};

export default Main;