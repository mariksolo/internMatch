import React, { Component } from 'react';

class LandingPage extends Component {
  render() {
    return (

      <div className="LandingPage">
        <link type="text/css" rel="stylesheet" href="https://cdn.firebase.com/libs/firebaseui/3.5.2/firebaseui.css" />
        <header className="App-header">

          
          <p>
            Edit <code>src/App.js</code> and to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div id="firebaseui-auth-container"></div>
        </header>
      </div>
    );
  }
}

export default LandingPage;
