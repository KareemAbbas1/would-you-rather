import * as types from './actionsTypes';
import { saveQuestion} from '../../utils/api';

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

export function addAnswer({ qid, authedUser, answer }) {
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



