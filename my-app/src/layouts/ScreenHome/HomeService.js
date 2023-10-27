import React, { useState } from 'react'

export function HandleInputClick() {
  const [isactive,SetIsActive] = useState(false);
  const setInputActive = (e) => {
    if (e.target.value === '') {
        SetIsActive(true);
    }
    else {
        SetIsActive(false);
    }
  }
  return {isactive, setInputActive}
}

export function HandleInputBlur() {
    const [isBlur, SetIsBlur] = useState(false);
    const setInputBlur = (e) => {
        if (e.target.value === '') {
            SetIsBlur(true);
        }
        else {
            SetIsBlur(false);
        }
    }
    return {isBlur,setInputBlur }
}
