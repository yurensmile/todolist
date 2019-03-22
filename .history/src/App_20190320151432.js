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
      return {
        all,
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
 // 将all视为todo，如果todo中的某个被点击，则在todo中删除，并添加到havedone中
  updateHavedone(index, item){
    this.setState(state => {
      let n = state.all.indexOf(item);
      let tem = state.all.slice();
      tem.splice(n, 1);
      let havedones = state.havedones.concat(item);
      return ({
        havedones,
        all: tem
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
