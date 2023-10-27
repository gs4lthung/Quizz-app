/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { FETCH_API_DOMAIN } from '../../const/domain';

/**
 *      This function fetches data from an API.
 *
 *      @param {void} None - This function does not require any parameters.
 *
 *      @example
 *      const dataList = FetchData();
 *
 *      @description
 *      This function fetches data from an API located at '/const/domain.js'.
 *
 *      @return {Array} An array containing the fetched data.
 *
 *      @author LTHung
 *
 *      @version 1.0.0
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

const localStorageData = 'selectedAnswers';

/**
 *      This function loads data from the browser's localStorage.
 *
 *      @param {React.Dispatch<React.SetStateAction<{}>>} setSelectedAnswers - The state setter function to update with data from localStorage.
 *
 *      @example
 *      Usage example in a React component:
 *      const [selectedAnswers, setSelectedAnswers] = useState({});
 *      LoadAnswers(setSelectedAnswers);
 *
 *      @description
 *      If there is data in the localStorage, this function loads the data only once during the component's mounting phase.
 *
 *       @return {void} This function does not return a value.
 *
 *      @author LTHung
 *
 *      @version 1.0.0
 */
export const LoadAnswers = (SetSelectedAnswers) => {
    useEffect(() => {
        const storedAnswers = localStorage.getItem(localStorageData);
        if (storedAnswers) {
            SetSelectedAnswers(JSON.parse(storedAnswers))
        }
    }, []);
};
/**
 *      This function saves data to the browser's localStorage.
 *
 *      @param {Object} selectedAnswers - The data to be saved to localStorage.
 *
 *      @example
 *      Usage example in a React component:
 *      const [selectedAnswers, setSelectedAnswers] = useState({});
 *      SaveAnswer(selectedAnswers);
 *
 *      @return {void} This function does not return a value.
 *
 *      @author LTHung
 *
 *      @version 1.0.0
 */
export const SaveAnswer = (selectedAnswers) => {
    useEffect(() => {
        localStorage.setItem(localStorageData, JSON.stringify(selectedAnswers))
    }, [selectedAnswers]);
};

/**
 *      This function clears all current data stored in the local state (managed by useState()) and in the browser's localStorage.
 *      @param {React.Dispatch<React.SetStateAction<{}>>} setSelectedAnswers - The state setter function to clear the local state.
 *
 *      @example To clear all selected answers when performing an event:
 *           onClick={() => handleAnswerClick(quiz.id, answer.id)}
 *
 *      @description
 *      This function can be used to wipe out all data when a specific event is triggered.
 *
 *      @return {void} This function does not return a value.
 *
 *      @author LTHung
 *
 *      @version 1.0.0
 */
export const ClearAllAnswers = (SetSelectedAnswers) => {
    SetSelectedAnswers({});
    localStorage.removeItem(localStorageData)
}

/**
 *      This function is used to delete the selected answer for a specific quiz.
 *      @param {any} quizId - The ID of the quiz for which the answer needs to be deleted.
 *      @param {React.Dispatch<React.SetStateAction<{}>>} SetSelectedAnswers - The state setter function to update the selected answers.
 */
export const ClearSelectedAnswer = (quizId, SetSelectedAnswers) => {
    SetSelectedAnswers((prev) => {
        const updatedAnswer = { ...prev };
        delete updatedAnswer[quizId];
        return updatedAnswer;
    })
}