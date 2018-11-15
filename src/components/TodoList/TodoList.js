import React, { Component } from 'react';
import getTodoList from '../../actions/TodoList'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import './TodoList.scss';

class TodoList extends Component {

    render() {

        return (

            <h1>TODO</h1>

        )

    }

}


const mapStateToProps = state => state;
const mapDispatchToProps = { getTodoList }

export { TodoList }

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList));

