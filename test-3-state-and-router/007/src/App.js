import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const titleText = 'Welcome to React';
    const paragraphText = 'Here is some text';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">{titleText}</h1>
        </header>
        <p className="App-intro">{paragraphText}</p>
      </div>
    );
  }
}

export default App;