import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { setVisibilityFilter } from '../../actions'

class Link extends Component {

    static propTypes = {
        active: propTypes.bool.isRequired,
        children: propTypes.node.isRequired,
        onClick: propTypes.func.isRequired
    }

    render() {

        if (this.props.active) {
            return <span>{this.props.children}</span>
        }

        return (
            <a
                href="\"
                onClick={e => {
                    e.preventDefault()
                    this.props.onClick()
                }}
            >
                {this.props.children}
            </a>
        )

    }

}


const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)