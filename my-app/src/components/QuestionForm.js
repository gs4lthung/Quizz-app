import React from 'react'
const handleAnswerSelection = (quizId, quizIsMultiple, answerId, answerIsCorrect) => {
    // Handle the selected answer here, e.g., update the state.
    console.log(`Selected Quiz ${quizId}, Is Multiple ${quizIsMultiple}, Answer ${answerId}, Is Correct ${answerIsCorrect}`);
};
export default function QuestionForm(props) {
    return (
        <div>
            {
                props.quizData.map((v, i) => {
                    return (
                        <div>
                            <h2>Quiz: {v.title}</h2>
                            <div>
                                {
                                    v.lsQuizz.map((quiz, i) => (
                                        <div key={quiz.id}>
                                            <p>Question {i + 1}: {quiz.content}</p>
                                            <ul>
                                                {
                                                    quiz.answer.map((answer, a) => (
                                                        <li
                                                            key={answer.id}
                                                        >
                                                            <input
                                                                type={quiz.isMultiple ? 'checkbox' : 'radio'}
                                                                id={`quiz${quiz.id}-answer${answer.id}`}
                                                                name={`quiz${quiz.id}`}
                                                                value={answer.id}
                                                                onClick={() => handleAnswerSelection(quiz.id, quiz.isMultiple, answer.id, answer.isCorrect)}
                                                            />
                                                            <label htmlFor={`quiz${quiz.id}-answer${answer.id}`}>{answer.content}</label>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
}
