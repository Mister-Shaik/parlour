import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'; 
import Navigation from '../Components/Navigation';
import Home from '../Components/Home';
import Services from '../Components/Services';
import Tips from '../Components/Tips';
import About from '../Components/About';

function App() {
  return (
    <div className="w-100">
      <Router>
        <Route path="/" component={Navigation}/>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/tips" component={Tips} />
        <Route path="/about" component={About} />
      </Router>
    </div>
  );
}

export default App;
