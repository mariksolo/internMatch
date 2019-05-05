import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import BusinessPage from './pages/BusinessPage';
import InternPage from './pages/InternPage';

// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (
      
      <Router>
         <Route path='/' exact component={LandingPage} />
         <Route path='/BusinessPage' component={BusinessPage} />
         <Route path='/InternPage' component={InternPage} />
         {/* <Route path='/NewUser' component={NewUser} /> */}
       </Router>
      
    );
  }
}

export default App;
