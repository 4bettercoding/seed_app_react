import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import todoList from './todoList'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    todos,
    visibilityFilter,
    todoList,
    routing: routerReducer
})