import React from 'react';
import './App.scss';
import NavBar from './componentes/navBar/navbar';
import Main from './componentes/main/main';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <div className='bgstar' id='n1' data-value="-2">
          <div className='bgstar' id='n2' data-value="6">
            <div className='bgstar' id='n3' data-value="4">
              <NavBar />
              <Main /> 
            </div>
          </div>  
        </div>
      </div>
    );
  }
}

export default App;
