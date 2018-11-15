import React, { Component } from 'react';
import getTodoList from '../../actions/TodoList'
import { connect } from 'react-redux'
import { withRouter } from "react-router";

import './TodoList.scss';

export class TodoList extends Component {

    componentDidMount() {

        console.log(this.props.getTodoList())

    }

    render() {

        return (

            <h1>TODO</h1>

        )

    }

}


const mapStateToProps = state => state;
const mapDispatchToProps = { getTodoList }

withRouter(connect(mapStateToProps, mapDispatchToProps)(TodoList));

