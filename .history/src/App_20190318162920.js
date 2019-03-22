import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state={
      inputValue: '',
      todos: ["learn vue"],
      checked: false
    };
  }

  handleOnClick(){
    this.setState(state =>{
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

  handleTodoOnclick(checked, e){
// if e.target is not text
    let box = e.target.previousSibling;
    this.setState((preState)=>{
      return {checked: !preState.checked}
    })
    if(checked){
      e.target.style.textDecoration = 'none';
      box.checked = false;
    }else{
      e.target.style.textDecoration = 'line-through';
      box.checked = true;
    }
  }
  render() {
    return (
      <div className="App">
        <input type="text" name="todo" value={this.state.inputValue} onChange={this.updateInputValue.bind(this)}/>
        <button onClick={this.handleOnClick.bind(this)}>Add</button><br/>
        <div className="choice" id="all">All</div>
        <div className="choice" id="done">have done</div>
        <div className="choice" id="later">later</div>
        <ul>
          {this.state.todos.map((item)=>{
            return (
              <div onClick={this.handleTodoOnclick.bind(this, this.state.checked)}>
                <input className="toggle" type="checkbox"/>
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
