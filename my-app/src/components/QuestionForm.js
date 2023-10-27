import React, { useState } from 'react'
import { ClearAllAnswers, ClearSelectedAnswer, LoadAnswers, SaveAnswer } from '../layouts/ScreenQuiz/QuizService';
import './QuestionForm.scss'
export default function QuestionForm(props) {

    const [selectedAnswers, SetSelectedAnswers] = useState({});
    const HandleAnswerClick = (quizId, answerId) => {
        SetSelectedAnswers((prev) => ({
            ...prev, [quizId]: answerId
        }))
    }

    LoadAnswers(SetSelectedAnswers);
    SaveAnswer(selectedAnswers);
    return (
        <div className='question-form'>
            {
                props.quizData.map((v, i) => (

                    <div key={v.id}>
                        <h2>Quiz: {v.title}</h2>
                        <div>
                            {
                                v.lsQuizz.map((quiz, j) => (
                                    <div key={quiz.id}>
                                        <p>Question {j + 1}: {quiz.content}</p>
                                        <ul>
                                            {
                                                quiz.answer.map((answer, k) => (
                                                    <li
                                                        key={answer.id}
                                                    >
                                                        <input
                                                            type={quiz.isMultiple ? 'checkbox' : 'radio'}
                                                            id={`quiz${quiz.id}-answer${answer.id}`}
                                                            name={`quiz${quiz.id}`}
                                                            value={answer.id}
                                                            onChange={() => HandleAnswerClick(quiz.id, answer.id)}
                                                            checked={selectedAnswers[quiz.id] === answer.id}
                                                        />
                                                        <label htmlFor={`quiz${quiz.id}-answer$={answer.id}`}>{answer.content}</label>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <button onClick={() => ClearSelectedAnswer(quiz.id, SetSelectedAnswers)}>Clear</button>
                                    </div>
                                ))
                            }
                        </div>
                        <button onClick={() => ClearAllAnswers(SetSelectedAnswers)}>Clear All Answers</button>
                    </div>
                ))
            }
        </div >
    )
}
