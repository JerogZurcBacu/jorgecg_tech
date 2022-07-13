import React from "react";
import './style.scss';
import Inicio from "../Inicio/inicio";

class Main extends React.Component {
    render () {
        return (
            <main className="contenedor-principal">
                <Inicio />
            </main>
        )
    };
};

export default Main;