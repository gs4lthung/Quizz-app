import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScreenHome from './layouts/ScreenHome/ScreenHome'
import ScreenQuiz from './layouts/ScreenQuiz/ScreenQuiz'
import ScreenResult from './layouts/ScreenResult/ScreenResult'
import Error404 from './layouts/ErrorPage/Error404'
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ScreenHome />} />
          <Route path='/quiz' element={<ScreenQuiz />} />
          <Route path='/quiz/result' element={<ScreenResult />} />

          {/* Define a catch-all route for incorrect URLs */}
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
