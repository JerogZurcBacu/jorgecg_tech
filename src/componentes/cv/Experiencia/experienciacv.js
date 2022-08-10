import React from "react";

import ResumenExp from "./resumen"
import LinksExp from "./links"

export default function ExperienciaCv() {
    return(
        <div className="sub-contenedor-cv">
                    <div className="contenedor-resumen-cv">
                        <ResumenExp />                    
                    </div>
                    <div className="contenedor-links-cv">
                        <LinksExp />
                    </div>
                </div>       
    );
}