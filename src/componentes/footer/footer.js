import React from "react";
import './style.scss';

class Footer extends React.Component {
    render () {
        return (
            <div className="contenedor-footer">
                <div className="sub-cont-1">
                    <p>México - 43815, Tizayuca, Hidalgo</p>
                    <p>hola.jorge.c@jorgecg.tech</p>
                </div>
                <div className="sub-cont-2">
                    <p>Hecho con amor por mi - 2022</p>
                </div>
            </div>           
        )
    }
}

export default Footer;