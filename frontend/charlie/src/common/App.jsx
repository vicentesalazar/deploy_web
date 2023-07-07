import { useNavigate } from 'react-router-dom';
import './App.css'

export default function App() {

  const navigate = useNavigate();
  function handleClick() {
    navigate("../common/MainPage");
  }

  return (
    <div className='container'>
      <div>
         <a href="../game/Rules">Reglas</a>
         <a href="../common/AboutUs">Conócenos</a>
      </div>
      <div className="chardee">
        <img onClick={handleClick} className='logo' src="src/assets/LOGO.svg" alt="Logo" />
        </div>
        <p className='frase'>Vive la experiencia del juego de juegos</p>
        <div className='signUp'>
          <a className='botonesSesion' href="../profile/logIn">Ingresar</a>
          <a className='botonesSesion' href="../profile/signUp">Únete</a>
          </div>
      <div className="foto-gang">
        <img src="src/assets/yellow-sunny-removebg-preview.png" alt="" />

      </div>
    </div>
  )
}



 
