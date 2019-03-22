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
      checked: false,
      id: 1
    };
    this.updateHavedone = this.updateHavedone.bind(this);
    this.updateLaters = this.updateLaters.bind(this);
  }

  handleOnClick() {
    this.setState(state =>{
      const laters = state.laters.concat(state.inputValue);

      return {
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
        case "Later": return {id: 1};
        case "Have done": return {id: 2};
        case "ALL": return {id: 3};
        default: return {id:1};
      }
    })
  }

 // 如果todo中的某个被点击，则在todo中删除，并添加到havedone中
  updateHavedone(index, item){
    this.setState(state => {
      let n = state.laters.indexOf(item);
      let tem = state.laters.slice();
      tem.splice(n, 1);
      let havedones = state.havedones.concat(item);
      return ({
        havedones,
        laters: tem
      })
    })
  }

// 如果havedone中的某个被点击，则在havedone中删除，并添加到later中
  updateLaters(index, item){
    console.log("this is updatelaters");
    this.setState(state => {
      let n = state.havedones.indexOf(item);
      let tem = state.havedones.slice();
      tem.splice(n, 1);
      let laters = state.laters.concat(item);
      return({
        laters,
        havedones: tem
      })
    })
  }

  render() {
    return (
      <div className="App">
        <input type="text" placeholder="what you will do?" name="todo" value={this.state.inputValue} onChange={this.updateInputValue.bind(this)}/>
        <button onClick={this.handleOnClick.bind(this)}>Add</button><br/>
        <p style={{color: "red"}}>{this.state.laters.length}未做</p>
        <p style={{color: "green" margin-bottom="0px"}}>{this.state.havedones.length}已做</p>
        <div id="content" onClick={this.contentOnclick.bind(this)}>
          <div className="choice later">Later</div>
          <div className="choice havedone" >Have done</div>
          <div className="choice all">ALL</div>
        </div>
        {/* 列表内容 */}
        <Todos 
          id={this.state.id} 
          laters={this.state.laters} 
          havedones={this.state.havedones} 
          all={this.state.all}
          updateHavedones={this.updateHavedone}
          updateLaters={this.updateLaters}
        />
      </div>
    );
  }
}

export default App;
