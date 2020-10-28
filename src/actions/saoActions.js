import axios from 'axios';
import {SET_SKILLS, SET_ORGS} from "./types";
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

export const feedSkills = (data) => dispatch  => {
    dispatch(setSkills);
};

export const setSkills = data => {
    return {
        type: SET_SKILLS,
        payload: data
    }
}

export const feedOrgs = (data) => dispatch => {
    dispatch(setOrgs);
}

export const setOrgs = data => {
    return {
        type: SET_ORGS,
        payload: data,
    }
}