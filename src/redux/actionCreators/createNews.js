import {CREATE_NEW_NEWS} from "../actionTypes/actionTypes";

export const createNewsAction = (data) => {
    return {
        type: CREATE_NEW_NEWS,
        payload: data
    }
}