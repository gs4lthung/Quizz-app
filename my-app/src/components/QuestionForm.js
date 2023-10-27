import React, { useState } from 'react'
import { ClearAllAnswers, ClearSelectedAnswer, LoadAnswers, SaveAnswer } from '../layouts/ScreenQuiz/QuizService';
import './QuestionForm.scss'
export default function QuestionForm(props) {
    // const nav = useNavigate();
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
            <h1 className='time'>
                Time: <label>10:00</label>
            </h1>
            {
                props.quizData.map((v, i) => (

                    <div key={v.id}>
                        <h2 className='form__header'>Quizz</h2>
                        <div className='form__body'>
                            {
                                v.lsQuizz.map((quiz, j) => (
                                    <div key={quiz.id}>
                                        <p className='question'>Question {j + 1}: {quiz.content}</p>
                                        <ul className='answers' style={{listStyle:'none'}}>
                                            {
                                                quiz.answer.map((answer, k) => (
                                                    <li className='answer'
                                                        key={answer.id}
                                                    >
                                                        <input className='input_answer'
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
                                        <button className='clearBtn' onClick={() => ClearSelectedAnswer(quiz.id, SetSelectedAnswers)}>Clear</button>
                                    </div>
                                ))
                            }
                        </div>
                        <p className='wrap_btn'>
                            <button className='btn ClearBtn' onClick={() => ClearAllAnswers(SetSelectedAnswers)}>Clear All Answers</button>
                            <button className='btn SubmitBtn'>Submit</button>
                        </p>
                    </div>
                ))
            }
        </div >
    )
}
