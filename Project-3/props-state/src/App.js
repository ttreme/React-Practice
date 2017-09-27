import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>{this.props.propNumber}</h2>
        <h2>{this.props.propString}</h2>
        <h2>{this.props.propObject.obj1}</h2>
        <Parent />
      </div>
    );
  }
}

App.defaultProps={
  propNumber:3,
  propString:"Hello String",
  propObject:{
    obj1:"I am 1",
    obj2:"I am 2",
    obj3:"I am 3",
    obj4:"I am 4",
  }
}

class Parent extends Component{
  constructor(props){
    super(props);

    this.state={
      cars:["s-Bmw", "s-Merc", "s-fiat","s-volks", 's-goku']
    };
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({cars: this.state.cars.reverse()})
  }
  render(){
  return(
    <div>
      <h2 onClick={this.handleClick}>Parent</h2>
      <h3>
        <Cars message="cars are cool" model='12312' coolCars={this.state.cars} />
      </h3>
    </div>
    );
  }
}


Parent.defaultProps={
  cars:["Bmw", "Merc", "fiat","volks"]
}
class Cars extends Component{

  render(){
  console.log(this.props);
  return(
    <div>
      <h3>
        Cars Component
      </h3>
      <p>{this.props.message}</p>
      <p>{this.props.model}</p>
    <div>{this.props.coolCars.map((item, i)=> {
          return <p key={i}>{item}</p>})}</div>
    </div>
    );
  }
}

export default App;
