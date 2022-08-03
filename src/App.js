import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

import NavBar from './componentes/navBar/navbar';
import Inicio from "./componentes/Inicio/inicio";
import AboutMe from "./componentes/aboutMe/about";
import Proyectos from "./componentes/proyectos/proyectos";
import Redes from "./componentes/redes/redes";
import Cv from "./componentes/cv/cv";

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <div className='bgstar' id='n1' data-value="-2">
          <div className='bgstar' id='n2' data-value="6">
            <div className='bgstar' id='n3' data-value="4">
              <HashRouter>
                <NavBar />
                  <main className="contenedor-principal">
                    <Switch>
                      <Route exact path="/SobreMi" component={AboutMe} />
                      <Route exact path="/Proyectos" component={Proyectos} />
                      <Route exact path="/Redes" component={Redes} />
                      <Route exact path="/Cv" component={Cv} />
                      <Route exact path="/" component={Inicio} />
                    </Switch>
                  </main> 
              </HashRouter>
            </div>
          </div>  
        </div>
      </div>
    );
  }
}

export default App;
