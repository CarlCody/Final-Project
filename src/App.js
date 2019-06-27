import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
// import Navbar from './components/utility/Navbar';

function App() {
  return (
    <Router>
       {/* <NavBar/> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='about' component={About} />
      </Switch>
    </Router>
  //  <div>
  //    <h1>Home Page?</h1>
  //  </div>
  );
}

export default App;
