import React, { useState } from 'react';
import { CheckAndClearEmptyQuestion, ClearAllAnswers, ClearSelectedAnswer, LoadAnswers, SaveAnswer } from '../../layouts/ScreenQuiz/QuizService';
import './QuestionForm.scss';
import { useNavigate } from 'react-router-dom';

export default function QuestionForm(props) {
    const nav = useNavigate();
    const [selectedAnswers, SetSelectedAnswers] = useState({});
    /**
     *      Handle a user's click on an answer option in a quiz.
     *
     *      @param {string} quizId - The unique identifier of the quiz.
     *      @param {string} answerId - The identifier of the selected answer.
     *      @param {boolean} isMultiple - Indicates whether the question allows multiple answers.
     *      @example 
     *      onChange={() => { handleAnswerClick(quiz.id, answer.id, quiz.isMutiple) }}
     *      @description
     *      Check if the selected answer is multiple or not and set it with SetSelectedAnswers
     *      @returns {void}
     *      @author LTHung
     *      @version 1.0.0.0
     */
    const HandleAnswerClick = (quizId, answerId, isMutiple) => {
        SetSelectedAnswers((prev) => {
            if (isMutiple) {
                // For multiple-choice questions, handle multiple selections
                const updatedAnswers = [...(prev[quizId] || [])];
                const answerIndex = updatedAnswers.indexOf(answerId);
                if (answerIndex === -1) {
                    updatedAnswers.push(answerId);
                } else {
                    updatedAnswers.splice(answerIndex, 1);
                }
                const newSelectedAnswers = {
                    ...prev,
                    [quizId]: updatedAnswers,
                }
                // Call CheckAndClearEmptyQuestion to remove local storage data if the question is empty
                CheckAndClearEmptyQuestion(newSelectedAnswers, quizId, SetSelectedAnswers);
                return newSelectedAnswers
            } else {
                // For non-multiple-choice questions, replace the existing selection with the new one
                const newSelectedAnswer = {
                    ...prev,
                    [quizId]: [answerId],
                }
                return newSelectedAnswer;
            }
        });
    };

    LoadAnswers(SetSelectedAnswers);
    SaveAnswer(selectedAnswers);

    return (
        <div className="question-form">
            <h1 className="time">
                Time: <label>10:00</label>
            </h1>
            <h2 className="form__header">{props.quizData.title}</h2>
            {props.quizData.lsQuizz && Object.values(props.quizData.lsQuizz).map((quiz) => (
                <div key={quiz.id}>
                    <div className="form__body">
                        <p className="question">Question: {quiz.content}</p>
                        <ul className="answers" style={{ listStyle: 'none' }}>
                            {quiz.answer.map((answer) => (
                                <li className="answer" key={answer.id}>
                                    <input
                                        className="input_answer"
                                        type={quiz.isMutiple ? 'checkbox' : 'radio'}
                                        id={`quiz${quiz.id}-answer${answer.id}`}
                                        name={`quiz${quiz.id}`}
                                        value={answer.id}
                                        onChange={() => { HandleAnswerClick(quiz.id, answer.id, quiz.isMutiple) }}
                                        checked={(selectedAnswers[quiz.id] || []).includes(answer.id)} // Check if the answer ID is in the selected answers array
                                    />
                                    <label htmlFor={`quiz${quiz.id}-answer${answer.id}`}>{answer.content}</label>
                                </li>
                            ))}
                        </ul>
                        <button className="clearBtn" onClick={() => ClearSelectedAnswer(quiz.id, SetSelectedAnswers)}>Clear</button>
                    </div>
                </div>
            ))}
            <p className="wrap_btn">
                <button className="btn ClearBtn" onClick={() => ClearAllAnswers(SetSelectedAnswers)}>Clear All Answers</button>
                <button onClick={() => { nav('/quiz/result') }} className="btn SubmitBtn">Submit</button>
            </p>
        </div>
    );
}