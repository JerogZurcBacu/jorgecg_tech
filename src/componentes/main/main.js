import React from "react";
import './style.scss';
/* import Inicio from "../Inicio/inicio"; */
/* import AboutMe from "../aboutMe/about"; */
import Proyectos from "../proyectos/proyectos";

class Main extends React.Component {
    render () {
        return (
            <main className="contenedor-principal">
                {/* <Inicio /> */}
                {/* <AboutMe /> */}
                <Proyectos />
            </main>
        )
    };
};

export default Main;