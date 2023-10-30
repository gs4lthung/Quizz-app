import { useRef, useState, Suspense } from 'react';
import { FetchData, FormatSelectedAnswer, PostQuestionData } from '../ScreenQuiz/QuizService'
import LoadingPage from '../../layouts/LoadingPage/LoadingPage.js';
import { useNavigate } from "react-router-dom";
import {
    ClearAllAnswers,
    ClearSelectedAnswer,
    LoadAnswers,
    SaveAnswer,
    HandleAnswerClick,
    HandleSubmitCLick
} from "../../layouts/ScreenQuiz/QuizService";
import { CountDown, formatTime } from "../../components/CountDown/CountDown";
import './ScreenQuiz.scss'


export default function ScreenQuiz() {
    const questionList = FetchData();
    const nav = useNavigate();
    const [selectedAnswers, SetSelectedAnswers] = useState({});
    const countDownRef = useRef();
    // console.log(questionList)
    
    LoadAnswers(SetSelectedAnswers);
    SaveAnswer(selectedAnswers);
    return (
        <>
            <div className="question-form">
                <h1 className="time">
                    Time: <CountDown seconds={300} ref={countDownRef} />
                </h1>
                <>
                    <Suspense fallback={<LoadingPage />}>
                        <h2 className="form__header">{questionList.title}</h2>
                        <h3 className="form__description">{questionList.description}</h3>
                        {questionList.lsQuizz && Object.values(questionList.lsQuizz).map((quiz) => (
                            <div key={quiz.id}>
                                <div className="form__body">
                                    <p className="question">Question: {quiz.content}</p>
                                    <ul className="answers" style={{ listStyle: "none" }}>
                                        {quiz.answer.map((answer) => (
                                            <li className="answer" key={answer.id}>
                                                <input
                                                    className="input_answer"
                                                    type={quiz.isMutiple ? "checkbox" : "radio"}
                                                    id={`quiz${quiz.id}-answer${answer.id}`}
                                                    name={`quiz${quiz.id}`}
                                                    value={answer.id}
                                                    onChange={() => {
                                                        HandleAnswerClick(quiz.id, answer.id, quiz.isMutiple, SetSelectedAnswers);
                                                    }}
                                                    checked={(selectedAnswers[quiz.id] || []).includes(
                                                        answer.id
                                                    )} // Check if the answer ID is in the selected answers array
                                                />
                                                <label htmlFor={`quiz${quiz.id}-answer${answer.id}`}>
                                                    {answer.content}
                                                </label>
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        className="clearBtn"
                                        onClick={() => ClearSelectedAnswer(quiz.id, SetSelectedAnswers)}
                                    >
                                        Clear
                                    </button>
                                </div>
                            </div>
                        ))}
                    </Suspense>
                </>
                <p className="wrap_btn">
                    <button
                        className="btn ClearBtn"
                        onClick={() => ClearAllAnswers(SetSelectedAnswers)}
                    >
                        Clear All Answers
                    </button>
                    <button
                        onClick={() => HandleSubmitCLick(countDownRef, formatTime, nav, selectedAnswers, questionList.id)}
                        className="btn SubmitBtn"
                    >
                        Submit
                    </button>
                </p>
            </div>
        </>
    )
}