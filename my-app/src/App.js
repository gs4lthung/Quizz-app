import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScreenHome from './layouts/ScreenHome/ScreenHome'
import ScreenQuiz from './layouts/ScreenQuiz/ScreenQuiz'
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ScreenHome />} />
          <Route path='/quiz' element={<ScreenQuiz />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
//Da chinh sua abc