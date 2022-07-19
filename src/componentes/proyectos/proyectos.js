import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './estilos/style.scss';
import Continuar from "../continuar/continuar";

class Proyectos extends React.Component {
    render() {
        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: false
        };
        return (
          <div className="contenedor-proyectos">
            <h1>Proyectos</h1>
            <Slider {...settings}>
              <div className="contenedor-slider-proy">
                <div className="img-proyectos" id="itgas" />
                <div className="contenedor-texto-proy">
                  <a href="http://itgas.com.mx/" target="_blank" rel="noreferrer"><h2>ItGas - Sitio Web</h2></a>
                  <p>Diseño y desarrollo completo del sitio web de ItGas. 100% Responsivo.</p>
                  <p>Tecnologías:</p>
                  <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                  </ul>
                </div>
              </div>
              <div className="contenedor-slider-proy">
                <div className="img-proyectos" id="aguanat" />
                <div className="contenedor-texto-proy">
                  <a href="https://www.aguanat.com/" target="_blank" rel="noreferrer"><h2>Aguanat - Sitio Web</h2></a>
                  <p>Diseño y desarrollo completo del sitio web de Aguanat. 100% Responsivo.</p>
                  <p>Tecnologías:</p>
                  <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Boottrap</li>
                  </ul>
                </div>  
              </div>
              <div className="contenedor-slider-proy">
                <div className="img-proyectos" id="silic" />
                <div className="contenedor-texto-proy">
                  <a href="https://siliclab.mx/" target="_blank" rel="noreferrer"><h2>SilicLab - Ecommerce</h2></a>
                  <p>Diseño y desarrollo completo del ecommerce de SilicLab. 100% Responsivo.</p>
                  <p>Tecnologías:</p>
                  <ul>
                      <li>Shopify</li>
                  </ul>
                </div> 
              </div>
              <div className="contenedor-slider-proy">
                <div className="img-proyectos" id="jorge" />
                <div className="contenedor-texto-proy">
                  <a href="https://jorgecg.tech/" target="_blank" rel="noreferrer"><h2>JorgeCG - Sitio Web</h2></a>
                  <p>Diseño y desarrollo completo del sitio web de JorgeCG. 100% Responsivo.</p>
                  <p>Tecnologías:</p>
                  <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>SASS</li>
                      <li>Javacript</li>
                      <li>React</li>
                  </ul>
                </div>
              </div>
              <div className="contenedor-slider-proy">
                <div className="img-proyectos" id="github" />
                <div className="contenedor-texto-proy">
                  <a href="http://itgas.com.mx/" target="_blank" rel="noreferrer"><h2>Practicas - Sitio Web</h2></a>
                  <p>Practicas de cursos y diplomados almacenados en GitHub</p>
                  <p>Tecnologías:</p>
                  <ul>
                      <li>Varios</li>
                  </ul>
                </div>
              </div>
            </Slider>
            <Continuar />
          </div>
        );
      }
    }

export default Proyectos;