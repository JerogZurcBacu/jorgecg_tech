import React from "react";
import './estilos/style.scss';
import Footer from "../footer/footer";

import { Link, Route, Router, Switch } from "react-router-dom";
import TodoCv from "./Todo/todocv";
import PersonalCv from "./Personal/personalcv";
 
class Cv extends React.Component {
    render () {
        return (
            <div className="contenedor-cv">
                <div className="contenedor-cabecera-cv">
                    <div className="contenedor-cabecera">
                        <div className="contenedor-buscador-cabecera">
                            <p>¿Quien es Jorge Cruz?</p>
                        </div>
                        <div className="contenedor-link-cabecera">
                            <ul className="lista-links-cabecera">
                                <li><Link to="/Cv">Todo</Link></li>
                                <li><Link to="/Cv/Personal">Personal</Link></li>
                                <li><Link to="/Cv/Estudios">Estudios</Link></li>
                                <li><Link to="/Cv/Experiencia">Experiencia</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="sub-contenedor-cv">
                    <Switch>
                        <Route path="/Cv" component={TodoCv} />
                        <Route path="/Cv/Personal" component={PersonalCv} />
                    </Switch>
                </div>
                    <div className="contenedor-footer-cv">
                        <Footer />
                    </div>    
            </div>
        )
    }
}

export default Cv; 