import { Suspense, lazy } from 'react';
import { FetchData } from '../ScreenQuiz/QuizService'

const QuestionForm = lazy(() => import('../../components/QuestionForm'));

export default function ScreenQuiz() {
    const questionList = FetchData();
    return (
        <>
            <Suspense fallback={<div>...Loading...</div>}>
                <QuestionForm quizData={questionList} />
            </Suspense >
        </>
    )
}