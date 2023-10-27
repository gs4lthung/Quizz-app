import React, { useState } from 'react'

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