import React, {useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Screenhome.scss'
import { HandleInputBlur, HandleInputClick } from './HomeService';
export default function ScreenHome() {
    const nav  = useNavigate();
    const [type, SetType] = useState(false);
    const {isactive, setInputActive} = HandleInputClick();
    const {isBlur, setInputBlur} = HandleInputBlur();
    const handleHide = () => {
        SetType(!type)
    }
    return (
        <div className='container'>
            <div className="form">
                <div className="group">
                    <h1>Quiz Test</h1>
                </div>
                <div class="group-pass">
                    <i class="fa-solid fa-lock"></i>
                    <input onBlur={setInputBlur} onClick={setInputActive} type={type ? 'text':'password'} id="password"/>
                    <i onClick={handleHide} class={`fa-solid ${type ? 'fa-eye': 'fa-eye-slash'}`}></i>
                    <label class={`name ${isactive && !isBlur ? 'active': ''}`} for="password">Password</label>
                </div>               
                <button onClick={() => {
                    nav('/quiz')
                }}>Start</button>
            </div>
        </div>
    )
}
