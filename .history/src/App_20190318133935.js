import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  handleOnClick(){
    console.log("you click me");
  }

  render() {
    return (
      <div className="App">
        <input type="text" name="todo" />
        <button onClick={this.handleOnClick.bind(this)}>Todo</button>
        <ul>
          <li> one todo </li>
        </ul>
      </div>
    );
  }


}

export default App;
