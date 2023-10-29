import React, { Suspense, lazy } from 'react'
import { FetchData } from '../ScreenQuiz/QuizService';
import LoadingPage from '../LoadingPage/LoadingPage';
const AnswerForm = lazy(() => import('../../components/AnswerForm/AnswerForm.js'));
export default function Answerpage() {
  const questionList = FetchData();
  return (
    <>
        <Suspense fallback={<LoadingPage />}>
          <AnswerForm quizData={questionList} />
        </Suspense >
    </>
  )
}
