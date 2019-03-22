import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state={
      inputValue: '',
      todos: []
    };
  }

  handleOnClick(){
    this.setState({
      todos: this.state.todos.push(this.state.inputValue)
    })
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
          {this.state.todos.map((item)=>{
            return <li>{item}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
