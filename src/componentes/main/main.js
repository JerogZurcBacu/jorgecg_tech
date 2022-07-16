import React from "react";
import './style.scss';
/* import Inicio from "../Inicio/inicio"; */
import AboutMe from "../aboutMe/about";

class Main extends React.Component {
    render () {
        return (
            <main className="contenedor-principal">
                {/* <Inicio /> */}
                <AboutMe />
            </main>
        )
    };
};

export default Main;