import React, { Component } from 'react';
import AppNavBar from './components/AppNavBar';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
      <div className="App">
      <AppNavBar />
<h1>Hello World</h1>
      </div>
      </div>
    );
  }
}

export default App;
