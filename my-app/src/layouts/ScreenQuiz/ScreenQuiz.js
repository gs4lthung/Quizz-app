import QuestionForm from '../../components/QuestionForm';
import { FetchQuestionData } from '../ScreenQuiz/QuizService'

export default function ScreenQuiz() {
    const questionList = FetchQuestionData();
    return (
        <QuestionForm quizData={questionList} />
    )
}
