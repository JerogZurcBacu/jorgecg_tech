import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './estilos/style.scss';

class HabilidadesAM extends React.Component {
    render() {
        const settings = {
          dots: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
        return (
          <div className="contenedor-hab-am">
            <Slider {...settings}>
              <div>
                <div className="contenedor-img-hb-am">
                    <div className="img-hb-am" id="hab-html">
                    </div>    
                </div>
                <h3>Nivel:</h3>
                <h2>Avanzado</h2>
              </div>
              <div>
                <div className="contenedor-img-hb-am">
                    <div className="img-hb-am" id="hab-css">
                    </div>    
                </div>
                <h3>Nivel:</h3>
                <h2>Avanzado</h2>
              </div>
              <div>
                <div className="contenedor-img-hb-am">
                    <div className="img-hb-am" id="hab-js">
                    </div>    
                </div>
                <h3>Nivel:</h3>
                <h2>Intermedio</h2>
              </div>
              <div>
                <div className="contenedor-img-hb-am">
                    <div className="img-hb-am" id="hab-sass">
                    </div>    
                </div>
                <h3>Nivel:</h3>
                <h2>Intermedio</h2>
              </div>
              <div>
                <div className="contenedor-img-hb-am">
                    <div className="img-hb-am" id="hab-react">
                    </div>    
                </div>
                <h3>Nivel:</h3>
                <h2>Intermedio</h2>
              </div>
              <div>
                <div className="contenedor-img-hb-am">
                    <div className="img-hb-am" id="hab-bs">
                    </div>    
                </div>
                <h3>Nivel:</h3>
                <h2>Intermedio</h2>
              </div>
              <div>
                <div className="contenedor-img-hb-am">
                    <div className="img-hb-am" id="hab-vsc">
                    </div>    
                </div>
                <h3>Nivel:</h3>
                <h2>Intermedio</h2>
              </div>
              <div>
                <div className="contenedor-img-hb-am">
                    <div className="img-hb-am" id="hab-git">
                    </div>    
                </div>
                <h3>Nivel:</h3>
                <h2>Intermedio</h2>
              </div>
              <div>
                <div className="contenedor-img-hb-am">
                    <div className="img-hb-am" id="hab-canva">
                    </div>    
                </div>
                <h3>Nivel:</h3>
                <h2>Avanzado</h2>
              </div>
              <div>
                <div className="contenedor-img-hb-am">
                    <div className="img-hb-am" id="hab-il">
                    </div>    
                </div>
                <h3>Nivel:</h3>
                <h2>Intermedio</h2>
              </div>
              <div>
                <div className="contenedor-img-hb-am">
                    <div className="img-hb-am" id="hab-ps">
                    </div>    
                </div>
                <h3>Nivel:</h3>
                <h2>Intermedio</h2>
              </div>
            </Slider>
          </div>
        );
      }
    }

export default HabilidadesAM;