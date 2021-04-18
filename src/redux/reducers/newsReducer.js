import {initialState} from "../store/initialState";
import {GET_NEWS} from "../actionTypes/actionTypes";
import {CREATE_NEW_NEWS} from "../actionTypes/actionTypes";

export const newsReducer = (state = initialState.news, action) => {
    switch (action.type) {
        case GET_NEWS :
            console.log(action)
            return action.payload
        case CREATE_NEW_NEWS:
            console.log(action.payload)
            return [...state, action.payload]
        default :
            return state
    }
}
