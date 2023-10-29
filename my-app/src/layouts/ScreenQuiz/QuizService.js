/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { FETCH_API_DOMAIN } from '../../const/domain';
const localStorageData = 'selectedAnswers';

/**
 *      This function fetches data from an API.
 * 
 *      @param {void} None - This function does not require any parameters.
 *      @example
 *      const dataList = FetchData();
 *      @description
 *      This function fetches data from an API located at '/const/domain.js'.
 *      @return {Array} An array containing the fetched data.
 *      @author LTHung
 *      @version 1.0.0.0
 */
export const FetchData = () => {
    const [questionList, SetQuestionList] = useState([]);
    useEffect(() => {
        fetch(FETCH_API_DOMAIN)
            .then((res) => res.json())
            .then((data) => {
                SetQuestionList(data);
            });
    }, []);

    return questionList;
};

/**
 *      This function loads data from the browser's localStorage.
 * 
 *      @param {React.Dispatch<React.SetStateAction<{}>>} setSelectedAnswers - The state setter function to update with data from localStorage.
 *      @example
 *      Usage example in a React component:
 *      const [selectedAnswers, setSelectedAnswers] = useState({});
 *      LoadAnswers(setSelectedAnswers);
 *      @description
 *      If there is data in the localStorage, this function loads the data only once during the component's mounting phase.
 *      @return {void} This function does not return a value.
 *      @author LTHung
 *      @version 1.0.0.0
 */
export const LoadAnswers = (SetSelectedAnswers) => {
    useEffect(() => {
        const storedAnswers = localStorage.getItem(localStorageData);
        if (storedAnswers) {
            SetSelectedAnswers(JSON.parse(storedAnswers));
        }
    }, [localStorageData, SetSelectedAnswers]);
};
/**
 *      This function saves data to the browser's localStorage.
 * 
 *      @param {Object} selectedAnswers - The data to be saved to localStorage.
 *      @example
 *      Usage example in a React component:
 *      const [selectedAnswers, setSelectedAnswers] = useState({});
 *      SaveAnswer(selectedAnswers);
 *      @return {void} This function does not return a value.
 *      @author LTHung
 *      @version 1.0.0.0
 */
export const SaveAnswer = (selectedAnswers) => {
    useEffect(() => {
        localStorage.setItem(localStorageData, JSON.stringify(selectedAnswers))
    }, [selectedAnswers]);
};

/**
 *      This function clears all current data stored in the local state (managed by useState()) and in the browser's localStorage.
 * 
 *      @param {React.Dispatch<React.SetStateAction<{}>>} setSelectedAnswers - The state setter function to clear the local state.
 *      @example To clear all selected answers when performing an event:
 *           onClick={() => handleAnswerClick(quiz.id, answer.id)}
 *      @description
 *          This function can be used to wipe out all data when a specific event is triggered.
 *      @return {void} This function does not return a value.
 *      @author LTHung
 *      @version 1.0.0.0
 */
export const ClearAllAnswers = (SetSelectedAnswers) => {
    SetSelectedAnswers({});
    localStorage.removeItem(localStorageData)
}

/**
 *      This function is used to delete the selected answer for a specific quiz.
 * 
 *      @param {any} quizId - The ID of the quiz for which the answer needs to be deleted.
 *      @param {React.Dispatch<React.SetStateAction<{}>>} SetSelectedAnswers - The state setter function to update the selected answers.
 *      @example To clear a selected answer when performing an event
 *          onClick={() => ClearSelectedAnswer(quiz.id, setSelectedAnswers)}
 *      @description
 *          This function can be used to clear selected answer when a specific event is triggered
 *      @return {void}  This funciton does not return a value
 *      @author LTHung
 *      @version 1.0.0.0
 */
export const ClearSelectedAnswer = (quizId, SetSelectedAnswers) => {
    SetSelectedAnswers((prev) => {
        const updatedAnswer = { ...prev };
        delete updatedAnswer[quizId];
        return updatedAnswer;
    })
}
/** 
 *      
 *      @param {JSON} selectedAnswers 
 *      @param {Object} quizId 
 *      @param {React.Dispatch<React.SetStateAction<{}>>} SetSelectedAnswers 
 *      @example CheckAndClearEmptyQuestion(newSelectedAnswers, quizId, SetSelectedAnswers);
 *      @description
 *      
 */
export const CheckAndClearEmptyQuestion = (selectedAnswers, quizId, SetSelectedAnswers) => {
    if (!selectedAnswers[quizId] || (Array.isArray(selectedAnswers[quizId]) && selectedAnswers[quizId].length === 0)) {
        ClearSelectedAnswer(quizId, SetSelectedAnswers)
    }
}

/**
 *      This function returns a specific format required by the customer.
 * 
 *      @param {Object} selectedAnswers - The selected answers object.
 *      @example
 *          FormatSelectedAnswer(selectedAnswers);
 *      @description
 *      If a question is multiple-choice, the function formats the answers as an array of objects
 * with "quesId" and "answerId". If the question is not multiple-choice, it formats a single object.
 *      @returns {Array} - An array of formatted answers.
 *      @author LTHung
 *      @version 1.0.0.0
 */
export const FormatSelectedAnswer = (selectedAnswers) => {
    const formattedAnswers = [];

    for (const quizId in selectedAnswers) {
        const answerId = selectedAnswers[quizId]
        const isMutiple = Array.isArray(answerId);

        if (isMutiple) {
            answerId.forEach(answerId => {
                formattedAnswers.push({
                    quesId: quizId,
                    answerId: answerId
                })
            })
        } else {
            formattedAnswers.push({
                quesId: quizId,
                answerId: answerId
            })
        }
    }
    return formattedAnswers;
}


export const PostQuestionData = (id, formattedAnswers) => {
    return new Promise((resolve, reject) => {
        // Your asynchronous operations here
        fetch(`https://server.nglearns.com/answer/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formattedAnswers),
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to post data');
                }
            })
            .then(data => {
                // Do something with the response data if needed
                localStorage.setItem('result', data);
                console.log(data);
                resolve(data); // Resolve the Promise on success
            })
            .catch(error => {
                console.error('Error:', error);
                reject(error); // Reject the Promise on error
            });
    });
};