import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoadAnswers } from '../../layouts/ScreenQuiz/QuizService';

import { FetchData } from '../ScreenQuiz/QuizService';
import './AnswerPage.scss';

export default function Answerpage() {
  const questionList = FetchData();
  const nav = useNavigate();
  const [selectedAnswers, SetSelectedAnswers] = useState({});
  LoadAnswers(SetSelectedAnswers);
  console.log(Object.values(selectedAnswers));

  return (
    <div className="question-answer">
      <h2 className="answer__header">{questionList.title}</h2>
      {questionList.lsQuizz && Object.values(questionList.lsQuizz).map((quiz) => (
        <div key={quiz.id}>
          <div className="answer__body">
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
                    checked={(selectedAnswers[quiz.id] || []).includes(answer.id)}
                  />
                  <label htmlFor={`quiz${quiz.id}-answer${answer.id}`}>{answer.content}</label>
                  {selectedAnswers[quiz.id] && selectedAnswers[quiz.id].includes(answer.id) ? (
                    <label>✔️</label>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      <button className='ResultBtn' onClick={() => { nav('/quiz/result') }}>Back To Result</button>
    </div>
  )
}
