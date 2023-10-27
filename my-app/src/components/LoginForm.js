import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HandleInputBlur, HandleInputClick } from '../layouts/ScreenHome/HomeService';

export default function LoginForm() {
    const [type, SetType] = useState(false);
    const nav = useNavigate();

    const { isactive, setInputActive } = HandleInputClick();
    const { isBlur, setInputBlur } = HandleInputBlur();
    const handleHide = () => {
        SetType(!type)
    }
    return (
        <div>
            <div className='container'>
                <div className="form">
                    <div className="group">
                        <h1>Quiz Test</h1>
                    </div>
                    <div className="group-pass">
                        <i className="fa-solid fa-lock"></i>
                        <input onBlur={setInputBlur} onClick={setInputActive} type={type ? 'text' : 'password'} id="password" />
                        <i onClick={handleHide} className={`fa-solid ${type ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                        <label className={`name ${isactive && !isBlur ? 'active' : ''}`} htmlFor="password">Password</label>
                    </div>
                    <button onClick={() => {
                        nav('/quiz')
                    }}>Start</button>
                </div>
            </div>
        </div>
    )
}
