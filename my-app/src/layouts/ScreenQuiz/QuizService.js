/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { FETCH_API_DOMAIN } from '../../const/domain';

/***
 *      Day la function fetch API
 *          @param none
 *          @example 
 *              const dataList = FetchData()
 *          @description 
 *              API lay tu /const/domain.js
 *          @return array
 *          @author LTHung
 *          @version 1.0.0.0
 */
export const FetchData = () => {
    const [questionList, setQuestionList] = useState([]);

    useEffect(() => {
        fetch(FETCH_API_DOMAIN)
            .then((res) => res.json())
            .then((data) => {
                setQuestionList(data);
            });
    }, []);

    return questionList;
};

const localStorageData = 'selectedAnswers';

/***
 *      Day la function load data tu localStorage
 *      @param SetSlectedAnswers : React.Dispatch<React.SetStateAction<{}>>
 *      @example
 *          const [selectedAnswers, SetSelectedAnswers] = useState({});
 *          LoadAnswers(SetSelectedAnswers);
 *      @description 
 *          Neu trong localStorage co data thi se load data chi mot lan khi DidMounted
 *      @return none
 *      @author LTHung
 *      @version 1.0.0.0
 */
export const LoadAnswers = (SetSelectedAnswers) => {
    useEffect(() => {
        const storedAnswers = localStorage.getItem(localStorageData);
        if (storedAnswers) {
            SetSelectedAnswers(JSON.parse(storedAnswers))
        }
    }, []);
};

/***
 *      Day la function save data vao localStorage
 *      @param selectedAnswers : {}
 *      @example 
 *          const [selectedAnswers, SetSelectedAnswers] = useState({});
 *          SaveAnswer(selectedAnswers);
 *      @return none
 *      @author LTHung
 *      @version 1.0.0.0
 */
export const SaveAnswer = (selectedAnswers) => {
    useEffect(() => {
        localStorage.setItem(localStorageData, JSON.stringify(selectedAnswers))
    }, [selectedAnswers]);
};

/***
 *      Day la function xoa data hien tai dang su dung useState() va trong localStorage
 *      @param SetSlectedAnswers : React.Dispatch<React.SetStateAction<{}>>
 *      @example
 *          onClick={() => HandleAnswerClick(quiz.id, answer.id)}
 *      @description
 *          Co the dung de xoa data khi thuc hien mot event nao do
 *      @return none
 *      @author LTHung
 *      @version 1.0.0.0
 */
export const ClearSelectedAnswers = (SetSelectedAnswers) => {
    SetSelectedAnswers({});
    localStorage.removeItem(localStorageData)
}