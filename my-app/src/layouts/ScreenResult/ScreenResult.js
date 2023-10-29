import React from 'react'
import { Suspense, lazy } from 'react'
import '../ScreenResult/ScreenResult.scss'
<<<<<<< Updated upstream
import LoadingPage from '../../components/LoadingPage/LoadingPage'
const ResultScreen = lazy(() => import('../../components/ResultForm/ResultForm'));
=======
import LoadingPage from '../LoadingPage/LoadingPage'
const ResultScreen = lazy(() => import('../../components/ResultForm'));
>>>>>>> Stashed changes
export default function ScreenResult() {
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <ResultScreen />
      </Suspense>
    </>
  )
}
