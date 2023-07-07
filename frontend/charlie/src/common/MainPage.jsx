import { useNavigate } from 'react-router-dom';
import "./MainPage.css"
import wine from '../assets/wine.svg'

export default function MainPage() {
  const navigate = useNavigate();
  
  const goBack = () => {
		navigate(-1);
	}

  function handleClick() {
    navigate("../game/StartGame");
  }


  return (
    <div>
      <div className="nav">
        <a className='buttonText' onClick={goBack}>Volver</a>
        <a href="../game/rules">Ver reglas del juego  </a>
      </div>

    <button className='boton-inicio' onClick={handleClick}>
      Inicia un juego &#127863;
      </button>

    <div className="parrafo">
      <p>Chardee MacDennis es un juego de mesa inspirado en la serie “It’s always sunny in Philadelphia”. En este juego, cada jugador elige un personaje y se enfrenta a una serie de retos reunidos en un mazo de cartas, las cuales va ganando a medida que cumple retos. Para avanzar de nivel debe reunir cierto número de cartas, y cada nivel cuenta con una serie de reglas exclusivas que desafían distintos aspectos del competidor. El primer jugador en completar los 3 niveles gana el juego, y obtiene la gran recompensa de poder destruir el personaje de sus rivales.</p>
    </div>

      
    </div>
  )
}