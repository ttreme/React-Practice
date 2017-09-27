import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.myName="Titus"
    this.state={};
  }

  sayHello(name){
    return {name};
  }
  render() {
    const name = "Titus"
    return (
      <div className="App">
        <div>Sample Data {this.myName}</div>
      </div>
    );
  }
}

export default App;
