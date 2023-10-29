import { Suspense, lazy } from 'react';
import { FetchData } from '../ScreenQuiz/QuizService'
import LoadingPage from '../../components/LoadingPage/LoadingPage';

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