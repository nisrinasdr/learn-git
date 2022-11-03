import { getListUser } from "./api";

export const GET_LIST_PENDING = "GET_LIST_PENDING";
export const GET_LIST_SUCCESS = "GET_LIST_SUCCESS";
export const GET_LIST_FAILED = "GET_LIST_FAILED";

export const getList = () => {
    return (dispatch) => {
        dispatch({
            type: GET_LIST_FAILED
        });

        getListUser()
        .then(res => {
            dispatch({
                type: GET_LIST_SUCCESS,
                payload: res
            })
        })
        .catch(error => {
            dispatch({
                type: GET_LIST_FAILED
            })
        });
    }
}