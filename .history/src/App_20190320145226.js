import React, { Component } from 'react';
import Todos from './Todos'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state={
      inputValue: '',
      laters: [],
      havedones: [],
      all: [],
      checked: false,
      id: 1
    };
    this.updateArray =this.updateArray.bind(this);
    this.updateHavedone = this.updateHavedone.bind(this);
    this.updateLaters = this.updateLaters.bind(this);
  }

  handleOnClick() {
    this.setState(state =>{
      const all = state.all.concat(state.inputValue);
      const laters = state.laters.concat(state.inputValue);
      return {
        all,
        laters,
        inputValue: ""
      }
    })
    console.log(this.state.all);
  }
  updateInputValue(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

// 点击了三栏内容
  contentOnclick(e) {
    let choice = e.target.innerHTML;
    this.setState((preState)=>{
      switch(choice){
        case "All": return {id: 1};
        case "Have done": return {id: 2};
        case "Later": return {id: 3};
        default: return {id:1};
      }
    })
  }
// 更细数组内容
  updateArray(index) {
    console.log(index);
    this.setState(state => {
      let deletedItem = state.all[index];
      let havedones = state.havedones.concat(deletedItem);
      return{
        havedones: havedones
      }
    })
  }

  updateHavedone(index, item){
    console.log("this is updatehavedone");
    this.setState(state => {
      let havedones = state.havedones.concat(state.all[index]);
      let a = state.laters.indexOf(item);
      let laters = state.laters.splice(a, 1);
      return ({
        havedones,
        laters
      })
    })
  }
  updateLaters(index, item){
    console.log("this is updatelaters");
    this.setState(state => {
      let laters = state.laters.concat(state.all[index]);
      let a = state.havedones.indexOf(item);
      let havedones = state.havedones.splice(a, 1);
      return ({
        havedones,
        laters
      })
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
        {/* 列表内容 */}
        <Todos 
          id={this.state.id} 
          laters={this.state.laters} 
          havedones={this.state.havedones} 
          all={this.state.all}
          update={this.updateArray}
          updateHavedones={this.updateHavedone}
          updateLaters={this.updateLaters}
        />
        {/* <ul>
          {this.state.all.map((item, index)=>{
            return (
              <div onClick={this.handleTodoOnclick.bind(this, this.state.checked)}>
                <input className="toggle" type="checkbox"/>
                <li key={index}>{item}</li>
              </div>
            )
          })}
        </ul> */}
      </div>
    );
  }
}

export default App;
