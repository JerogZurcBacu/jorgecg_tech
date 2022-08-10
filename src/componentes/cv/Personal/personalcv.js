import React from "react";

import ResumenPerso from "./resumen"
import LinksPerso from "./links"

export default function PersonalCv() {
    return(
        <div className="sub-contenedor-cv">
                    <div className="contenedor-resumen-cv">
                        <ResumenPerso />                    
                    </div>
                    <div className="contenedor-links-cv">
                        <LinksPerso />
                    </div>
                </div>       
    );
}