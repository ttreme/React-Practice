import React, {Component} from 'react';
import Navbar from './Navbar';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Container from './Container';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Header/>
        <Container/>
        <hr/>
        <Footer/>
      </div>
    );
  }
}

export default App;
