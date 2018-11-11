import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Containers/Routes'
import { MainNavigation } from './Containers/MainNavigation'


class  App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <header className="App-header">
              {/*<img src={logo} className="App-logo" alt="logo" />*/}
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              {/*<a*/}
                {/*className="App-link"*/}
                {/*href="https://reactjs.org"*/}
                {/*target="_blank"*/}
                {/*rel="noopener noreferrer"*/}
              {/*>*/}
                {/*Learn React*/}
              {/*</a>*/}

            </header>
              <MainNavigation/>
              <Routes/>
          </div>
        </Router>
    );
  }
}

export default App;
