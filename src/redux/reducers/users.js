import * as types from '../actions/actionsTypes';


const users = (state = {}, action) => {
    switch (action.type) {

        case types.GET_USERS:
            return {
                ...state,
                ...action.users
            };

        default:
            return state;
    };
};

export default users;