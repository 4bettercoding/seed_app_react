import React, { Component } from 'react';
import { getTodoList} from '../../actions/TodoList'
import { connect } from 'react-redux'
// import { withRouter } from "react-router";

import './TodoList.scss';
// import {toggleTodo, VisibilityFilters} from "../../actions";

class TodoList extends Component {
//export class TodoList extends Component {

    componentDidMount() {

        this.props.getTodoList()

    }

    render() {

        console.log('Value of loading', this.props.isLoading)
        console.log('Value of error', this.props.isError)
        console.log('Value of payload', this.props.payload.data)

        return (

            <h1>TODO</h1>

        )

    }

}

const mapStateToProps = ( state ) =>  {
    // console.log('Value of state and todo list', state.TodoList);
    return { isLoading: state.TodoList.isLoading,
             isError: state.TodoList.isError,
             payload: state.TodoList.payload,
             getTodoList: state.TodoList.getTodoList }}

const mapDispatchToProps = { getTodoList }

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)

// const mapStateToProps = state => ({
//     todos: getVisibleTodos(state.todos, state.visibilityFilter)
// })
//
// const mapDispatchToProps = dispatch => ({
//     toggleTodo: id => dispatch(toggleTodo(id))
// })
//
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(TodoList)