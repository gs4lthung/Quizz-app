import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error404 from './layouts/ErrorPage/Error404'
import Error500 from './layouts/ErrorPage/Error500'
import AnswerPage from './layouts/AnswerPage/AnswerPage'
import LoadingPage from './layouts/LoadingPage/LoadingPage'

const ScreenHome = lazy(() => import('./layouts/ScreenHome/ScreenHome'))
const ScreenQuiz = lazy(() => import('./layouts/ScreenQuiz/ScreenQuiz.js'))
const ScreenResult = lazy(() => import('./layouts/ScreenResult/ScreenResult'))

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'
            element={
              <Suspense fallback={<LoadingPage />}>
                <ScreenHome />
              </Suspense>
            } />
          <Route path='/quiz'
            element={
              <Suspense fallback={<LoadingPage />}>
                <ScreenQuiz />
              </Suspense>
            } />
          <Route path='/quiz/result'
            element={
              <Suspense fallback={<LoadingPage />}>
                <ScreenResult />
              </Suspense>
            } />
          <Route path='/quiz/result/answer'
            element={
              <Suspense fallback={<LoadingPage />}>
                <AnswerPage />
              </Suspense>
            } />
          <Route path='/server-error' element={<Error500 />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
