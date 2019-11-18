import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Second from './components/second/second';
import First from './components/first/first';
import Student from './components/student/student';
import Demo from './components/demo/demo';
import Nameform from './components/nameform/nameform';
import Parent from './components/parent/parent';
import Calc from './components/calc/calc';
import Nameex from './components/nameex/nameex';
import Summary from './components/summary/summary';
import FirstQuestion from './components/firstquestion/firstquestion';
import SecondQuestion from './components/secondquestion/secondquestion';
import ThirdQuestion from './components/thirdquestion/thirdquestion';
import FinalSummary from './components/finalsummary/finalsummary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <p>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
    </nav>
    <hr />
    <Switch>
        <Route exact path='/' component={FirstQuestion} />
        <Route exact path='/finalSummary' component={FinalSummary} />
        <Route path='/firstq' component={FirstQuestion} />
        <Route path='/secondq' component={SecondQuestion} />
        <Route path='/thirdq' component={ThirdQuestion} />
        <Route path='/summary' component={Summary} />
    </Switch>
            </p>
      </header>
    </div>
  );
}

export default App;
