import React from "react";

import ResumenEst from "./resumen"
import LinksEst from "./links"

export default function EstudiosCv() {
    return(
        <div className="sub-contenedor-cv">
                    <div className="contenedor-resumen-cv">
                        <ResumenEst />                    
                    </div>
                    <div className="contenedor-links-cv">
                        <LinksEst />
                    </div>
                </div>       
    );
}