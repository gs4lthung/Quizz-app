import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
export default function ResultForm() {
  const nav = useNavigate();
  const [userName, SetUserName] = useState('');
  const [result, SetResult] = useState('');
  const [submitTime, SetSubmitTime] = useState('');
  useEffect(() => {
    // Hàm để cập nhật trạng thái từ localStorage
    const updateStateFromLocalStorage = () => {
      const storedUserName = localStorage.getItem('username') || '';
      const storedResult = localStorage.getItem('result') || '';
      const storedSubmitTime = localStorage.getItem('submitTime') || '';

      SetUserName(storedUserName);
      SetResult(storedResult);
      SetSubmitTime(storedSubmitTime);
    };

    // Gọi hàm cập nhật trạng thái từ localStorage khi component render
    updateStateFromLocalStorage();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <div className='form'>
        <div className='form_result'>
          <h2 className='form_header'>Quizz Result</h2>
          <p className='form__name'>Name: {userName}</p>
          <p className='form__score'>Total score: {result}</p>
          <p className='form__time'>Time: {submitTime}</p>
          <div className="vkRange">
            <svg viewBox="0 0 32 32" width="100" height="100">
              <circle r="16" cx="16" cy="16" strokeDasharray="24 100"></circle>
            </svg>
            <div>24%</div>
          </div>
          <div className='form__mark'>24/100</div>
          <button onClick={() => {nav('/quiz/result/answer')}} className='form__btn'>Review Answer</button>
        </div>
      </div>
    </>
  )
}

//jjjjjj
