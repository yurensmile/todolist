import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state={
      inputValue: '',
      todos: ["learn vue"]
    };
  }

  handleOnClick(){
    this.setState(state =>{
      // if(state.inputValue != ""){
      const todos = state.todos.concat(state.inputValue);
      
      return {
        todos,
        inputValue: ""
      }
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
            return (
              <div onClick={this.handleTodoOnclick.bind(this)}>
                <input class="toggle" type="checkbox"/>
                <li key={item.id}>{item}</li>
              </div>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
