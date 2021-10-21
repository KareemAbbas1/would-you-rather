import * as types from './actionsTypes';
import { saveQuestion, saveQuestionAnswer } from '../../utils/api';

export const getQuestions = (questions) => {
    return {
        type: types.GET_QUESTIONS,
        questions
    };;
};

function addQuestion(question) {
    return {
        type: types.ADD_QUESTION,
        question
    }
};

function addAnswer({ qid, authedUser, answer }) {
    return {
        type: types.ADD_ANSWER,
        info: {
            qid,
            authedUser,
            answer
        }
    }
};


export function handleAddQuestion(otionOne, optionTwo) {
    return async (dispatch, getState) => {
        const { authedUser } = getState();

        return saveQuestion({ otionOneText: otionOne, optionTwoText: optionTwo, authedUser })
            .then(question => dispatch(addQuestion(question)))
    };
};


export function handleAddAnswer(qid, answer) {
    return async (dispatch, getState) => {
        const { authedUser } = getState();

        return saveQuestionAnswer({ qid, authedUser, answer })
            .then(() => dispatch(addAnswer({ qid, authedUser, answer })))
    };
};

