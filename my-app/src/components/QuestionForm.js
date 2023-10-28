import React, { useState } from 'react';
import { ClearAllAnswers, ClearSelectedAnswer, LoadAnswers, SaveAnswer } from '../layouts/ScreenQuiz/QuizService';
import '../layouts/ScreenQuiz/QuestionForm.scss';
import { useNavigate } from 'react-router-dom';

export default function QuestionForm(props) {
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const nav = useNavigate();
    const handleAnswerClick = (quizId, answerId) => {
        setSelectedAnswers((prev) => ({
            ...prev,
            [quizId]: answerId
        }));
    };

    LoadAnswers(setSelectedAnswers);
    SaveAnswer(selectedAnswers);

    return (
        <div className="question-form">
            <h1 className="time">
                Time: <label>10:00</label>
            </h1>
            <h2 className="form__header">Quizz</h2>
            {props.quizData.lsQuizz && Object.values(props.quizData.lsQuizz).map((quiz) => (
                <div key={quiz.id}>
                    <div className="form__body">
                        <p className="question">Question: {quiz.content}</p>
                        <ul className="answers" style={{ listStyle: 'none' }}>
                            {quiz.answer.map((answer) => (
                                <li className="answer" key={answer.id}>
                                    <input
                                        className="input_answer"
                                        type={quiz.isMutiple ? "checkbox" : 'radio'}
                                        id={`quiz${quiz.id}-answer${answer.id}`}
                                        name={`quiz${quiz.id}`}
                                        value={answer.id}
                                        onChange={() => handleAnswerClick(quiz.id, answer.id)}
                                        checked={selectedAnswers[quiz.id] === answer.id}
                                    />
                                    <label htmlFor={`quiz${quiz.id}-answer${answer.id}`}>{answer.content}</label>
                                </li>
                            ))}
                        </ul>
                        <button className="clearBtn" onClick={() => ClearSelectedAnswer(quiz.id, setSelectedAnswers)}>Clear</button>
                    </div>
                </div>
            ))}
            <p className="wrap_btn">
                <button className="btn ClearBtn" onClick={() => ClearAllAnswers(setSelectedAnswers)}>Clear All Answers</button>
                <button onClick={() => {nav('/quiz/result')}} className="btn SubmitBtn">Submit</button>
            </p>
        </div>
    );
}