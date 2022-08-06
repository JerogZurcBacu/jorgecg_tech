import React from "react";

import ResumenTodo from "./resumen"
import LinksTodo from "./links"

export default function TodoCv(props) {
    return(
        <div className="sub-contenedor-cv">
                    <div className="contenedor-resumen-cv">
                        <ResumenTodo />                    
                    </div>
                    <div className="contenedor-links-cv">
                        <LinksTodo />
                    </div>
                </div>       
    );
}