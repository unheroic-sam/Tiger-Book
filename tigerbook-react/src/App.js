import React, { Component } from 'react';
import SignIn from './components/SignIn/signIn'
import Register from './components/Register/Register'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      	<SignIn />
      	<Register />
      </div>
    );
  }
}

export default App;
