import { useEffect, useState } from 'react';

export const FetchQuestionData = () => {
    const [questionList, setQuestionList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:1880/quiz")
            .then((res) => res.json())
            .then((data) => {
                setQuestionList(data);
            });
    }, []);

    return questionList;
};

export const HandleAnswerSelection = (quizId, answerId) => {
    const selectedAnswers = JSON.parse(localStorage.getItem('selectedAnswers')) || {};
    selectedAnswers[quizId] = answerId;
    localStorage.setItem('selectedAnswers', JSON.stringify(selectedAnswers));
};

export const ClearLocalStorage = () => {
    localStorage.clear();
}

