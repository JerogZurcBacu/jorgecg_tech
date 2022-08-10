import React from "react";
import '../estilos/style.scss';

class LinksPerso extends React.Component {
    render () {
        return (
            <div className="contenedor-links">
                <h3 id="h3-personal">Acerca de mi</h3>
                <p id="parrafo-personal">Hola, mi nombre es Jorge Cruz García, también me dicen Coco y uso un anagrama de mi nombre, Jerog Zurc para algunas cuentas. Soy técnico superior en big data, pero me apasiona el desarrollo web y por eso he dedicado los últimos 3 años a desarrollar y aprender más sobre este tema.</p>
                <ul id="lista-personal">
                    <li>Nacimiento: 30 de septiembre de 1993, CDMX</li>
                    <li>Estatura: 156 cm </li>
                    <li>Pareja: Brenda Alvarez</li>
                    <li>Hijos: 1, Abigail Shosanna</li>
                    <li>Color favorito: Azul</li>
                    <li>Deporte favorito: Fútbol, Soccer</li>
                    <li>Equipo favorito: Chivas </li>
                    <li>Pasatiempo: Videojuegos - muy malo en cualquiera</li>
                    <li>Videojuego favorito: Fifa, solo le gano a la maquina</li>
                </ul>
            </div>
        )
    }
}

export default LinksPerso; 