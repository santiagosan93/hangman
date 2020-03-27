import React, { Component } from 'react';
import HangMan from './components/hang_man'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <HangMan/>
      </div>
    )
  }
}

export default App;
