import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './components/Checkout';
import About from './components/About';
import Login from './components/Home'
import Register from './components/Register'
// import Navbar from './components/utility/Navbar';

function App() {
  return (
    <Router>
       {/* <NavBar/> */}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='about' component={About} />
        <Route exact path='/Login' component={Login} />
        <Route exact path='/Register' component={Register} />
         {/* <Route exact path='/user:uid' component={} />  */}
      </Switch>
    </Router>
  //  <div>
  //    <h1>Home Page?</h1>
  //  </div>
  );
}

export default App;
