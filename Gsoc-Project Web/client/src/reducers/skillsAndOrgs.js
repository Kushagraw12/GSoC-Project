import {SET_SKILLS, SET_ORGS} from "../actions/types";
import isEmpty from "../utils/is-empty";

const initialState = {
    skills: [],
    orgs: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_SKILLS:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        default:
            return state;
    }
}
