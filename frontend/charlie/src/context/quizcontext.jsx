import { createContext, useReducer } from "react";
import questions from "./data"
import { shuffleAnswers } from "./helpers";
const initialState = {
    questions,
    index: 0,
    showResults: false,
    correctAnswerCount: 0,
    answers: shuffleAnswers(questions[0]),
}
const reducer = (state, action) => {
    console.log("reducer", state, action)
    switch (action.type) {
        case "NEXT_QUESTION": {
            const showResults = state.index === state.questions.length - 1
            const index = showResults ? state.index : state.index + 1
            return {
                ...state,
                index,
                showResults,
            }
        }
        case "RESTART": {
            return initialState
        }
        default: return state
    }
}
 
export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {
    const value = useReducer(reducer, initialState)
    return <QuizContext.Provider value = {value}> {children} </QuizContext.Provider>
}