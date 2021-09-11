import React, { Component } from 'react';
import './App.css';
import HomePage from './containers/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <HomePage />
        </header>
      </div>
    );
  }
}

export default App;
