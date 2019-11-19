import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import BackgroundSlideshow from 'react-background-slideshow'
import image1 from './1.png'
import image2 from './2.png'
import image3 from './3.png'
import Summary from './components/summary/summary';
import FirstQuestion from './components/firstquestion/firstquestion';
import SecondQuestion from './components/secondquestion/secondquestion';
import ThirdQuestion from './components/thirdquestion/thirdquestion';
import FinalSummary from './components/finalsummary/finalsummary';
import Welcome from './components/welcome/welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <p>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
    </nav>
    
    {/* <BackgroundSlideshow images={[ image1, image2, image3 ]} /> */}
    <Switch>
        <Route exact path='/' component={Welcome} />
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
