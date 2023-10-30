import React from 'react'
import { Suspense, lazy } from 'react'
import '../ScreenResult/ScreenResult.scss'
import LoadingPage from '../../layouts/LoadingPage/LoadingPage.js'
import { FetchData } from '../ScreenQuiz/QuizService';
const ResultScreen = lazy(() => import('../../components/ResultForm/ResultForm'));
export default function ScreenResult() {
  const questionList = FetchData();
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <ResultScreen quizData={questionList}/>
      </Suspense>
    </>
  )
}
