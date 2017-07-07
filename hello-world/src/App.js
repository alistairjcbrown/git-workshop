import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Git Workshop</h2>
        </div>
        <p>
          Bacon ipsum dolor amet salami shank swine, pastrami sausage jowl brisket landjaeger pig. Pork belly short ribs salami, fatback picanha shank landjaeger ham hock ground round meatball biltong boudin cow. Kevin tail biltong fatback prosciutto chicken burgdoggen flank pork belly pancetta picanha jerky. Boudin alcatra pork belly frankfurter chicken burgdoggen prosciutto corned beef ground round capicola. Doner sausage shoulder tail meatloaf sirloin. Pancetta filet mignon bacon andouille shankle jowl shank turducken swine pastrami strip steak venison.
        </p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
