import { Suspense, lazy } from 'react';
import { FetchData } from '../ScreenQuiz/QuizService'
import LoadingPage from '../../components/LoadingPage';

const QuestionForm = lazy(() => import('../../components/QuestionForm'));

export default function ScreenQuiz() {
    const questionList = FetchData();
    return (
        <>
            <Suspense fallback={<LoadingPage/>}>
                <QuestionForm quizData={questionList} />
            </Suspense >
        </>
    )
}