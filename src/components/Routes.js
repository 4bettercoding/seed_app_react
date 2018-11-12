import { Route } from 'react-router-dom';
import { Home } from './Home/Home'
import { About } from './About/About'
import { Code } from './Code/Code'
import { Contact } from './Contact/Contact'
import { Info } from './Info/Info'
import  React  from 'react'

const Routes = () => {

    return (
        <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/code" component={Code}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/info" component={Info}/>
        </div>
    )
}

export { Routes }

