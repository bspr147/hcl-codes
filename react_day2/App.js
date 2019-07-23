import React from 'react';
import logo from './logo.svg';
import './App.css';
import First from './components/first/first';
import Second from './components/second/second';
import NameForm from './components/nameform/nameform';
import AreaForm from './components/areaform/areaform';
import DropDown from './components/dropdown/dropdown';
import Multi from './components/multi/multi';
import FormNew from './components/formnew/formnew';
import ValidateForm from './components/validateform/validateform';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <First/>
        </p>
        <p>
          <Second/>
        </p> 
        <p>
          <NameForm/>
        </p> 
        <p>
          <AreaForm/>
        </p> 
        <p>
          <DropDown/>
        </p> 
        <p>
          <Multi/>
        </p> 
        <p>
          <FormNew/>
        </p> 
        <p>
          <ValidateForm/>
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
