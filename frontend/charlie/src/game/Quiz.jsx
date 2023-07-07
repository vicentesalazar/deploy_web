import { useContext } from "react"
import { QuizContext } from "../context/quizcontext"
import Question from "./Question"

const Quiz = () => {

    const [quizState, dispatch] = useContext(QuizContext)
    console.log('quizState', quizState)
    return (
        <div className="quiz">
            {quizState.showResults && (
                <div className="results">
                    <div className="congratulations">
                        FELICITACIONES
                    </div>
                    <div className="results-info">
                        Haz completado las preguntas, obtuviste {quizState.correctAnswerCount} / {quizState.questions.length} correctas
                    </div>
                    <div className="next-button" onClick={() => dispatch({type: "RESTART"})}>Restart</div>
                </div>
            )}
            {!quizState.showResults && (
                <div>   
                    <div className="score">
                        Question {quizState.index + 1} / {quizState.questions.length}
                    </div>
                    <Question/>
                    <div className="next-button" onClick={() => dispatch({ type: "NEXT_QUESTION"})}>
                        Siguiente pregunta
                    </div>
                </div>
            )} 
            
        </div>
    )
}

export default Quiz