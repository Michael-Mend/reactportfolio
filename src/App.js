import React from 'react';
import Main from './components/Main';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

export default App;
