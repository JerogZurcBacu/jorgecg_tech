import React from "react";
import './estilos/style.scss';
import Footer from "../footer/footer";

import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import TodoCv from "./Todo/todocv";
import PersonalCv from "./Personal/personalcv";
import EstudiosCv from "./Estudios/estudioscv";
import ExperienciaCv from "./Experiencia/experienciacv";
 
const Cv = () => {

let {path, url} = useRouteMatch();

return (
        <div className="contenedor-cv">
            <div className="contenedor-cabecera-cv">
                <div className="contenedor-cabecera">
                    <div className="contenedor-buscador-cabecera">
                        <p>¿Quien es Jorge Cruz?</p>
                    </div>
                    <div className="contenedor-link-cabecera">
                        <ul className="lista-links-cabecera">
                            <li><Link to={`${url}`}>Todo</Link></li>
                            <li><Link to={`${url}/Personal`}>Personal</Link></li>
                            <li><Link to={`${url}/Estudios`}>Estudios</Link></li>
                            <li><Link to={`${url}/Experiencia`}>Experiencia</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="sub-contenedor-cv">
                <Switch>
                    <Route exact path={path} component={TodoCv} />
                    <Route path={`${path}/Personal`} component={PersonalCv} />
                    <Route path={`${path}/Estudios`} component={EstudiosCv} />
                    <Route path={`${path}/Experiencia`} component={ExperienciaCv} />
                </Switch>
            </div>
                <div className="contenedor-footer-cv">
                    <Footer />
                </div>    
        </div>
    )
}


export default Cv; 