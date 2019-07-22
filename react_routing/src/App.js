import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/about'; 
import Contact from './components/contact/contact';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <h2>Welcome to React Router Tutorial</h2>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <ul className="navbar-nav mr-auto">
      <li><Link to={'/'} className="nav-link"> Home </Link></li>
      <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
      <li><Link to={'/about'} className="nav-link">About</Link></li>
    </ul>
    </nav>
    <hr />
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
    </Switch>
  </div>
  );
}

export default App;
