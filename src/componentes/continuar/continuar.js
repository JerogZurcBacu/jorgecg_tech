import React from "react";
import { NavLink } from 'react-router-dom';
import './style.scss';

export default function Continuar(props) {
    return(
        <div className="continuar">
            <span><NavLink to={props.hacia}>Continuar</NavLink></span>
        </div>        
    );
}