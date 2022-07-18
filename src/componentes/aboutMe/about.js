import React from "react";
import './estilos/style.scss';
import TextoAm from "./texto";
import HabilidadesAM from "./habilidades";
import Continuar from '../continuar/continuar';

class AboutMe extends React.Component {
    render () {
        return (
            <div className="contenedor-about">
              <TextoAm />
              <HabilidadesAM />  
              <Continuar />
            </div>
        )
    };
};

export default AboutMe;