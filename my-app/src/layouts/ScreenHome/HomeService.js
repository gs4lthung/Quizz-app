import { useEffect } from "react";

export function Hide(type, setType) {
    setType(type === 'text' ? 'password' : 'text');
}
export function HandleInputClick(SetIsActive) {
    SetIsActive(true);
}
export function HandleInputBlur(SetIsActive, e) {
    if (e.target.value === '') {
        SetIsActive(false)
    }
}
export function InputName(SetisName) {
    SetisName(true);
}
export function BlurName(SetisName, e) {
    if (e.target.value === '') {
        SetisName(false)
    }
}

export const CheckAccount = async (accounts, inputUsername, inputPassword) => {
    for (let i = 0; i < accounts.length; i++) {
        if (inputUsername === accounts[i].username && inputPassword === accounts[i].password) {
            return true;
        }
    }
    return false;
}

export const HandleWrongLogin = (cntWrongLogin, SetIsSubmit) => {
    useEffect(() => {
        console.log(cntWrongLogin)
        if (cntWrongLogin === 5) {
            SetIsSubmit(false);
        } else if (cntWrongLogin > 0 && cntWrongLogin < 5) {
            console.log('print has input wrong username of password')
        }
    }, [cntWrongLogin])
}