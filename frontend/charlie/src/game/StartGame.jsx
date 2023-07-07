import './StartGame.css'
import { useNavigate } from 'react-router-dom'
import Quiz from './Quiz';
import { QuizProvider } from '../context/quizcontext';


export default function StartGame(){

    const navigate = useNavigate();
    const goBack = () => {
		navigate(-1);
	}

    return(
        <>
        <QuizProvider>
          <Quiz />
        </QuizProvider>
        <div className="nav">
        <a onClick={goBack}>Volver</a>
      </div>
        <img className='frank' src='https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2021/07/sunnyfrank-1.jpg' alt="" />

        </>
    )
}

