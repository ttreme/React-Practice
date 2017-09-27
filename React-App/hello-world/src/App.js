import React, { Component } from 'react';

import './App.css';
import Intro from './Intro';
import Header from './Header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Intro />
      </div>
    );
  }
}


export default App;
