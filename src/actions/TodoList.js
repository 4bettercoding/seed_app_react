import { ITEM_LIST_PROCESSING, ITEM_LIST_RECEIVED, ITEM_LIST_ERROR } from "../utils/AJAXResponseTypes";

import axios from 'axios';

const getTodoList = () => {
    return (dispatch) => {

        dispatch({
            type: ITEM_LIST_PROCESSING
        })

        axios.get('https://jsonplaceholder.typicode.com/todos/')
            .then((response) => {
                dispatch({
                    type: ITEM_LIST_RECEIVED,
                    payload: response
                })
            })
            .catch((error) => {
                dispatch({
                    type: ITEM_LIST_ERROR,
                    payload: error
                })
            })
    }
}

export default { getTodoList }