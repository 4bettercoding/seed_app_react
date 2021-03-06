import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions/index'

class AddTodo extends Component {

    render(){

        let input

        return (
            <div>
                <form onSubmit={e => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    this.props.addTodo(input.value)
                    input.value = ''
                }}>
                    <input ref={node => input = node} />
                    <button type="submit">
                        Add Todo
                    </button>
                </form>
            </div>
        )

    }

}

const mapStateToProps = state => state;
const mapDispatchToProps = { addTodo }

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)