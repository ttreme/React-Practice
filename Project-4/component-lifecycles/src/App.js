import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Component Lifecycle</h2>
        </div>
        <Body />
      </div>
    );
  }
}

class Body extends Component{
  constructor(props){
    super(props);

    this.state={
      r:0
    };
    this.getNumber=this.getNumber.bind(this);
  }
  getNumber(){
    this.setState({
      r: Math.round(Math.random()*10)
    })
  }
  render(){
  return(
      <div>
        <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
        </p>
            <button onClick={this.getNumber}>GenerateNumber</button>
            <MyNumber myNumber={this.state.r}/>
      </div>
    );
  }
}
class MyNumber extends Component{
  componentWillMount(){
    console.log("Comp will mount");
  }
  componentDidMount(){
    console.log("Comp did mount");
  }
  componentWillReceiveProps(newProps){
    console.log("Receiving Props");
  }
  render(){
  return(
      <div>
        {this.props.myNumber}
      </div>
    );
  }
}

export default App;
