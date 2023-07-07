import { useContext } from 'react'
import { QuizContext} from '../context/quizcontext'
import Answer from './Answer'
const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    const currentQ = quizState.questions[quizState.index]

    return (
        <div>
            <div className="question">
                { currentQ.question }
            </div>
            <div className="answers">
                { quizState.answers.map((answer, a_index) => (
                    <Answer answerText={answer} key={a_index}/>
                ))}
            </div>
        </div>
    )

}

export default Question