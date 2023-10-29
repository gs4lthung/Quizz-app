import React from 'react'
import { Suspense, lazy } from 'react'
import '../ScreenResult/ScreenResult.scss'
import LoadingPage from '../../layouts/LoadingPage/LoadingPage.js'
const ResultScreen = lazy(() => import('../../components/ResultForm/ResultForm'));
export default function ScreenResult() {
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <ResultScreen />
      </Suspense>
    </>
  )
}
