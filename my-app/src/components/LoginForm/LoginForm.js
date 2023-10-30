import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaLock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash, FaUser } from "react-icons/fa";
import '../ResultForm/ResultForm'
import { HandleInputBlur, HandleInputClick, Hide, InputName, BlurName } from '../../layouts/ScreenHome/HomeService';

export default function LoginForm() {
    const nav = useNavigate();
    const [type, SetType] = useState('password');
    const [isactive, SetIsActive] = useState(false);
    const [isName, SetisName] = useState(false);
    const [username, SetUsername] = useState(''); // State for username
    const [password, SetPassword] = useState(''); // State for password
    const HandleHideClick = () => {
        Hide(type, SetType);
    };
    const HandleClick = () => {
        HandleInputClick(SetIsActive);
    };
    const HandleBlur = (e) => {
        HandleInputBlur(SetIsActive, e);
    };
    const HandleNameCLick = () => {
        InputName(SetisName);
    };
    const HandleNameBlur = (e) => {
        BlurName(SetisName, e);
    };
    const handleLogin = () => {
        // Save the username and password in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        // Redirect to the quiz page
        nav('/quiz');
    };
    return (
        <div className='container'>
            <div className="form_login">
                <div className="group">
                    <h1>Quiz Test</h1>
                </div>
                <div className="group-pass">
                    <FaUser className='icon_1' />
                    <input required onBlur={HandleNameBlur} onFocus={HandleNameCLick} type="text"
                        value={username}
                        onChange={(e) => SetUsername(e.target.value)} // Update username state
                    />
                    <label className={`name ${isName ? 'active' : ''}`}>Name</label>
                </div> 
                <div className="group-pass">
                    <FaLock className='icon_1' />
                    <input onBlur={HandleBlur} onFocusCapture={HandleClick} type={type} id="password"
                        value={password}
                        onChange={(e) => SetPassword(e.target.value)} // Update password state
                    />
                    {
                        type === 'password' ? (<FaEyeSlash onClick={HandleHideClick} className='fa-eye-slash' />) :
                            (<FaEye onClick={HandleHideClick} className="fa-eye" />)
                    }
                    <label className={`name ${isactive ? 'active' : ''}`} htmlFor="password">Password</label>
                </div>
                <button className='custom-btn btn' onClick={handleLogin}>
                    <span>Start</span>
                </button>
            </div>
        </div>
    )
}
