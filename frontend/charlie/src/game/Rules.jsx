import './Rules.css'
import presentacion_chardee from '../assets/presentacion_chardee.webp'
import tablero_chardee from '../assets/tablero_chardee.png'
import mascotas_chardee from '../assets/mascotas_chardee.webp'
import cartas_chardee from '../assets/cartas_chardee.webp'
import dardos_chardee from '../assets/dardos_chardee.webp'
import pelea_chardee from '../assets/pelea_chardee.jpeg'
import brindis_chardee from '../assets/brindis_chardee.jpeg'
import regla_1 from '../assets/regla_1.png'
import regla_2 from '../assets/regla_2.png'
import regla_3 from '../assets/regla_3.png'
import regla_4 from '../assets/regla_4.png'
import regla_5 from '../assets/regla_5.png'
import regla_6 from '../assets/regla_6.png'

import React from 'react';
import ImageSlider from './ImageSlider'
import Gallery from './Gallery'

import { useNavigate } from 'react-router-dom';


const Rules = () => {
    const slides = [
        { url: regla_1, title : "presentacion" },
        { url: regla_2, title : 'tablero' },
        { url: regla_3, title : 'mascotas'},
        { url: regla_4, title : 'cartas'},
        { url: regla_5, title : 'dadrdos'},
        { url: regla_6, title :'pelea'},
    ];
    const gallery_imgs = [
        { img: presentacion_chardee},
        { img: mascotas_chardee},
        { img: cartas_chardee},
        { img: dardos_chardee},
        { img: pelea_chardee},
        { img: brindis_chardee}
    ];
    const containerStyles = {
      width: "500px",
      height: "500px",
      margin: "0 auto",
    };
    const navigate = useNavigate();
    function handleClick() {
      navigate(-1);
    }

    return (
      <div>
        <div>
         <a onClick={handleClick}>Volver</a>
         <a href="../common/AboutUs">Conócenos</a>
      </div>

        <h1>Aquí están las reglas!</h1>
        <div style={containerStyles}>
            <ImageSlider slides={slides} />
        </div>
        <div>
            <h2>Ahora te dejamos un poco de inspiración de los creadores de "Chardee MacDennis" (S:7, E:7).</h2>
        </div>
        <div className="gallery">
            <Gallery gallery_imgs = {gallery_imgs} />
        </div>
      </div>
    );
  };
  

  export default Rules;

