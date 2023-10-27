import React, { useState } from 'react'
import { ClearSelectedAnswers, LoadAnswers, SaveAnswer } from '../layouts/ScreenQuiz/QuizService';
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
        <div>
            {
                props.quizData.map((v, i) => (

                    <div key={v.id}>
                        <button onClick={() => ClearSelectedAnswers(SetSelectedAnswers)}>Clear</button>
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
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div >
    )
}
