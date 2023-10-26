import React from 'react'
import { HandleAnswerSelection } from '../layouts/ScreenQuiz/QuizService'
export default function QuestionForm(props) {
    return (
        <div>
            {
                props.quizData.map((v, i) => {
                    return (
                        <div>
                            <h2>Quiz: {v.title}</h2>
                            <div>
                                {
                                    v.lsQuizz.map((quiz, i) => (
                                        <div key={quiz.id}>
                                            <p>Question {i + 1}: {quiz.content}</p>
                                            <ul>
                                                {
                                                    quiz.answer.map((answer, a) => (
                                                        <li
                                                            key={answer.id}
                                                        >
                                                            <input
                                                                type={quiz.isMultiple ? 'checkbox' : 'radio'}
                                                                id={`quiz${quiz.id}-answer${answer.id}`}
                                                                name={`quiz${quiz.id}`}
                                                                value={answer.id}
                                                                onClick={HandleAnswerSelection(quiz.id, answer.id)}
                                                            />
                                                            <label htmlFor={`quiz${quiz.id}-answer${answer.id}`}>{answer.content}</label>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                })
            }

        </div >
    )
}
