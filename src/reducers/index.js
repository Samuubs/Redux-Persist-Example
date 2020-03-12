import { combineReducers } from "redux";

import UserReducer from "./userReducer";

const rootReducer =  combineReducers({
    UserReducer: UserReducer
});

export default rootReducer;
