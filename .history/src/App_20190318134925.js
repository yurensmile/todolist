import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state={
      inputValue: ''
    };
  }

  handleOnClick(){
    console.log("you click me");
  }
  updateInputValue(e){
    this.setState({
      inputValue: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <input type="text" name="todo" value={this.state.inputValue} onChange={this.updateInputValue.bind(this)}/>
        <button onClick={this.handleOnClick.bind(this)}>Todo</button>
        <ul>
          <li> one todo </li>
        </ul>
      </div>
    );
  }


}

export default App;
