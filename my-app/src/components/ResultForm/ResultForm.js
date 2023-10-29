import React, { useState, useEffect } from 'react'
export default function ResultForm() {
  const [submitTime, SetSubmitTime] = useState('');

  useEffect(() => {
    // Retrieve the submitTime value from localStorage
    const storedSubmitTime = localStorage.getItem('submitTime');
    if (storedSubmitTime) {
      SetSubmitTime(storedSubmitTime);
    }
  }, []);
  return (
    <>
      <div className='form'>
        <div className='form_result'>
          <h2 className='form_header'>Quizz Result</h2>
          <p className='form__name'>Name: Nguyenx ANh Tuan</p>
          <p className='form__score'>Total score: 10</p>
          <p className='form__time'>Time: {submitTime}</p>
          <div className="vkRange">
            <svg viewBox="0 0 32 32" width="100" height="100">
              <circle r="16" cx="16" cy="16" strokeDasharray="24 100"></circle>
            </svg>
            <div>24%</div>
          </div>
          <div className='form__mark'>24/100</div>
          <button className='form__btn'>Review Answer</button>
        </div>
      </div>
    </>
  )
}
