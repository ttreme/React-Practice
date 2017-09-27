import React, {Component} from 'react';
import './App.css';
import Sales from './Sales';

class App extends Component {
  render() {
    let courses = [
      {
        name: "Complete IOS",
        price: 199
      }, {
        name: "Complete Test",
        price: 299
      }, {
        name: "Complete Poop",
        price: 1999
      }
    ];
    return (
      <div className="App">
        <h1>Welcome to course purchase page</h1>
        <Sales items={courses}/>
      </div>
    );
  }
}

export default App;
