import React from 'react';
import logo from './logo.svg';
import './App.css';
import First from './components/first/first';
import Second from './components/second/second';
import Redux1 from './components/redux1/redux1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          <Redux1/>
          </p>
        <p>
          <Second/>
          </p>
        <p>
          <First/>
        </p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
