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