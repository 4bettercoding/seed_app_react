import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import TodoList from './TodoList'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    todos,
    visibilityFilter,
    TodoList,
    routing: routerReducer
})