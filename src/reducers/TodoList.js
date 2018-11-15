import { ITEM_LIST_PROCESSING, ITEM_LIST_RECEIVED, ITEM_LIST_ERROR } from "../utils/AJAXResponseTypes";

let INITIAL_STATE = {
    isLoading: true,
    isError: false,
    payload: {}
}

const TodoList = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ITEM_LIST_PROCESSING:
            return {
                ...state,
                isLoading: true,
                isError: false,
                payload: {},
            }
        case ITEM_LIST_RECEIVED:
            return {
                ...state,
                isLoading: false,
                isError: false,
                payload: action.payload,
            }
        case ITEM_LIST_ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true,
                payload: action.payload,
            }
        default:
            return state
    }
}

export default TodoList