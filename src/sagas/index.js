import { put, all, takeEvery } from 'redux-saga/effects'
import * as actionTypes from '../actions/types';

function* handleAddUser(action) {
    yield put({
        type: actionTypes.ADD_USER_SUCCESS,
        payload: action.payload
    })
}

function* rootSaga() {
    yield all([takeEvery(actionTypes.ADD_USER, handleAddUser)])
}

export default rootSaga;
