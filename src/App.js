import React, { Component } from 'react';
import Main from './components/Main';
import Projects from './components/Projects';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/reactportfolio' component={Main}></Route>
        <Route exact path='/reactportfolio/projects' component={Projects}></Route>
      </Router>
    );
  }
}

export default App;
