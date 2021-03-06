import * as types from '../actions/actionsTypes';


const questions = (state = {}, action) => {
    switch (action.type) {

        case types.GET_QUESTIONS:
            return {
                ...state,
                ...action.questions
            };

        case types.ADD_QUESTION:

            return {
                ...state,
                [action.question.id]: action.question
            };

        case types.ADD_ANSWER:

            const { qid, authedUser, answer } = action.info;

            return {

                ...state, [qid]: {
                    ...state[qid], [answer]: {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat(authedUser)
                    }
                }

            };

        default:
            return state;
    };
};

export default questions;