import { Suspense, lazy } from 'react';
import { FetchData } from '../ScreenQuiz/QuizService'
<<<<<<< Updated upstream
import LoadingPage from '../../components/LoadingPage/LoadingPage';
=======
import LoadingPage from '../LoadingPage/LoadingPage';
>>>>>>> Stashed changes

const QuestionForm = lazy(() => import('../../components/QuestionForm/QuestionForm.js'));

export default function ScreenQuiz() {
    const questionList = FetchData();
    return (
        <>
            <Suspense fallback={<LoadingPage />}>
                <QuestionForm quizData={questionList} />
            </Suspense >
        </>
    )
}