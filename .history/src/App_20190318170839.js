import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state={
      inputValue: '',
      todos: ["learn vue"],
      havedones: [],
      all: [],
      checked: false,
      id: 1
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

// 点击了todo 列表的内容
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
// 点击了三栏内容
  contentOnclick(e){
    let choice = e.target.innerHTML;
    this.setState((preState)=>{
      switch(choice){
        case "All": return {id: 1};
        case "Have done": return {id: 2};
        case "Later": return {id: 3};
        default: return({id:1});
      }
    })

  }

  render() {
    return (
      <div className="App">
        <input type="text" name="todo" value={this.state.inputValue} onChange={this.updateInputValue.bind(this)}/>
        <button onClick={this.handleOnClick.bind(this)}>Add</button><br/>
        <div id="content" onClick={this.contentOnclick.bind(this)}>
          <div className="choice">All</div>
          <div className="choice">Have done</div>
          <div className="choice">Later</div>
        </div>
      
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
