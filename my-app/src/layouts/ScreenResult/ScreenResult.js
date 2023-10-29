import React from 'react'
import { Suspense, lazy } from 'react'
import '../ScreenResult/ScreenResult.scss'
import LoadingPage from '../../components/LoadingPage/LoadingPage'
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
