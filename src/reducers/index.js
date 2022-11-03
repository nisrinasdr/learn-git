import { combineReducers } from "redux";
import { GET_LIST_FAILED, GET_LIST_PENDING, GET_LIST_SUCCESS } from "../features/list/action";

const listReducer = (
    state = {
        loading: true,
        data: [],
    }, 
    action) => {
    switch(action.type) {
        case GET_LIST_PENDING: 
            return {
                ...state, 
                loading: true, 
                data: [],
            };
        case GET_LIST_SUCCESS: 
            return {
                ...state,
                loading: false,
                data: action.payload,
            };
        case GET_LIST_FAILED: 
            return {
                ...state,
                loading: false,
                data: [],
            };
        default: return state.data;
    };
}

export const rootReducer = combineReducers({
    list: listReducer
});