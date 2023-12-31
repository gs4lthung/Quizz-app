import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../ScreenResult/ScreenResult.scss'
export default function ScreenResult(props) {
  const nav = useNavigate();
  const [userName, SetUserName] = useState('');
  const [result, SetResult] = useState('');
  const [submitTime, SetSubmitTime] = useState('');
  const [selectedAnswers, SetSelectedAnswers] = useState({})
  useEffect(() => {
    // Retrieve the username value from localStorage
    const storedUserName = localStorage.getItem('username') || '';
    if (storedUserName) {
      SetUserName(storedUserName);
    };

    //Retrieve the result value from localStorage
    const storedResult = localStorage.getItem('result') || '';
    if (storedResult) {
      SetResult(storedResult)
    }

    // Retrieve the submitTime value from localStorage
    const storedSubmitTime = localStorage.getItem('submitTime') || '';
    if (storedSubmitTime) {
      SetSubmitTime(storedSubmitTime);
    };

    const storedAnswers = localStorage.getItem('selectedAnswers' || '');
    if (storedAnswers) {
      SetSelectedAnswers(storedAnswers)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);

  return (

    <div className='form'>
      <div className='form_result'>
        <h2 className='form_header'>Quizz Result</h2>
        <p className='form__name'>Name: {userName}</p>
        <p className='form__score'>Total score: {result}</p>
        <p className='form__time'>Time: {submitTime}</p>
        <div className="vkRange">
          <svg viewBox="0 0 32 32" width="100" height="100">
            <circle r="16" cx="16" cy="16" strokeDasharray={`
              ${selectedAnswers
                ? Math.floor((result / 4) * 100)
                : 0
              }
              100 
              `}></circle>
          </svg>
          <div>{selectedAnswers
            ? Math.floor((result / 4) * 100)
            : 0}%
          </div>
        </div>
        <div className='form__mark'>{`${result} / ${4}`}</div>
        <button onClick={() => { nav('/quiz/result/answer') }} className='form__btn'>Review Answer</button>
      </div>
    </div>
  )
}
