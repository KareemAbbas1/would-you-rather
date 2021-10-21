import * as types from './actionsTypes';

export const getUsers = (users) => {
    return {
        type: types.GET_USERS,
        users
    };
};