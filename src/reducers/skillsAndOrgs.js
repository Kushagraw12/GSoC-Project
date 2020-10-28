import {SET_SKILLS, SET_ORGS} from "../actions/types";

const initialState = {
    skills: [],
    orgs: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_SKILLS:
            return {
                ...state,
                skills: action.payload
            }
        case SET_ORGS:
            return {
                ...state,
                orgs: action.payload,
            }
        default:
            return state;
    }
}
