import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './AboutUs.css'
import charlie_bloqueador from '../assets/charlie_bloqueador.jpg'
import yo from '../assets/yo.jpeg'
import artu from '../assets/artu.jpeg'
import logo from "../assets/LOGO.svg"
import goback from "../assets/go-back.svg"



export default function AboutUs() {

    const navigate = useNavigate();
    function handleClick() {
      navigate("../common/MainPage");
    }

    const goBack = () => {
		navigate(-1);
	}

  return (

    <>
    <div className='nav'>
        <div className="chardee-us">
            <img onClick={handleClick} className='logo-us' src={logo} alt="Logo" />
        </div>
            <a className='buttonText' onClick={goBack}>Volver</a>
            <a className='buttonText' href="../game/Rules">Reglas</a>
      </div>

    <div className ="titulo">
      <h1 >Hola, descubriste nuestra info personal</h1>
    </div>
    <div className = "img_container">
        <img src={charlie_bloqueador} alt="charlie"/>
    </div>
    <div className = "content">
        Somos 2 estudiantes de 5to año de ingeniería unidos por la serie "It's Always Sunny in Philadelphia" (solo el gusto, no creas que andamos comiendo bloqueador por la vida). Compartimos el  major IDI, el gusto por todo tipo de música y las ganas de implementar una increíble pagina web para que puedas disfrutar de nuestro juego. 
    </div>
    <div className = "content">
        A continuación, te dejamos con un poco de cada uno.
    </div>

    <div className="profiles">
        <div className ="card_container">
            <img src={artu} alt="img_arturo" className="card_img"/>
            <div className ="card_text">
                <h1>ola me llamo arturo</h1>
                <h4>A veces soy Artur. Estudio ingeniería, tengo una banda, juego futbol, bla, bla, bla. Lo más importante es que veo la serie It's Always Sunny In Philadelphia y, por lo tanto, junto a vicho estamos desarrollando una recreación del juego de juegos.</h4>
            </div>
        </div>

        <div className ="card_container">
                <img src={yo} alt="img_vicente" className="card_img"/>
            <div className ="card_text">
                <h1>ola me llamo vicente</h1>
                <h4>No me gusta lazaro soho, pero escuchenlos en spotify igual son buenos. En vez de decir estoy en quinto año de ingenieria, prefiero decir que llevo 5 años sin cambiarme de carrera. Me gustan los completos y The Office, pero no se me ocurrió un juego relacionado con esa serie.</h4>
            </div>
        </div>
    </div>
    <a className="back_button" href="../common/MainPage">Ir a página principal</a>
   

    </>
  )
}