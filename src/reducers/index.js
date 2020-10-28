import {combineReducers} from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import skillsAndOrgs from "./skillsAndOrgs";

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    sao: skillsAndOrgs,
});


