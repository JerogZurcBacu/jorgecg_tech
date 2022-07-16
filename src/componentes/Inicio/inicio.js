import React from "react";
import './style.scss';
import Continuar from "../continuar/continuar";

class Inicio extends React.Component {
    render () {
        return (
            <div className="contenedor-inicio">
                <div className="contenedor-inicio-tx">
                    <div id="hola">Hola</div>
                    <div id="mundo">Mundo</div>
                    <div id="soy">Soy</div>
                    <div id="jorge">Jorge</div>
                    <div id="cruz">Cruz</div>
                    <div id="dw">
                        <ul>
                            <li>Diseñador Web</li>
                            <li>Big Data</li>
                            <li>Humano XD</li>
                        </ul>
                    </div>
                </div>
                <Continuar /> 
            </div>
        )
    }
}

export default Inicio;