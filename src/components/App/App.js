import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from '../Routes'
import { Main } from '../Navigation/Main'
import TodoFilter from '../Todo/TodoFilter'
import AddTodo from '../Todo/AddTodo'
import TodoList from '../Todo/TodoList'
// import Link from '../Todo/Link'

class  App extends Component {

  render() {

    return (

      <Router>

          <div className="app">

            <header className="header">
             <img src={logo} className="App-logo" alt="logo" />
             <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
             <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">

             </a>

            </header>
              <Main/>
              <Routes/>

              <AddTodo />
              <TodoList />
              {/*<Link />*/}
              <TodoFilter />
          </div>
        </Router>
    )

  }

}

export default App;
