import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Navigation from '../Components/Navigation/Navigation';
import Home from '../Components/Home/Home';
import Tips from '../Components/Tips/Tips';
import About from '../Components/About/About';

function App() {
  return (
    <div>
      <Router>
          <Route path="/" component={Navigation}/>
          <Route path="/" exact component={Home} />
        <Switch>
          <Route path="/tips" component={Tips} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
