import React from 'react'
// import FilterLink from '../../containers/FilterLink'
import Link from './Link'
import { VisibilityFilters } from '../../actions/index'

const TodoFilter = () => (
    <p>
        Show: <Link filter={VisibilityFilters.SHOW_ALL}>All</Link>
        {', '}
        <Link filter={VisibilityFilters.SHOW_ACTIVE}>Active</Link>
        {', '}
        <Link filter={VisibilityFilters.SHOW_COMPLETED}>Completed</Link>
    </p>
)

export default TodoFilter