import * as actionTypes from '../actions/types';

const addUser = (name) => ({
    type: actionTypes.ADD_USER,
    payload: name
});

export { addUser };
