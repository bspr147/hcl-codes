import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './components/demo/demo';
import Parent from './components/parent/parent';
import Demo1 from './components/demo1/demo1';
import NameForm from './components/nameform/nameform';
import MouseMove from './components/mousemove/mousemove';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <Demo user="Prasanna"/>

        </p> 
        <p>

          <Parent/>
        </p>
        <p>
          <Demo1/>
        </p>
        <p>
          <NameForm/>
        </p> 
        <p>
          <MouseMove/>
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
