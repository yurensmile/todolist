import React, { Component } from 'react';

class Later extends Component{
  constructor(props){
    super(props);
    this.state = {
      checked: false,
    };
  }

  // 点击了later列表的内容
  handleTodoOnclick(checked, index, item, e){
    // this.setState((preState)=>{
    //   return {checked: !preState.checked}
    // });
    // if(!checked){
  //如果later中的某个被点击，则在later中删除，并添加到havedone中
      this.props.updateHavedones(index, item, e);
    // }
  }

  render(){
    return (
      <ul>
        {this.props.laters.map((item, index)=>{
          return (
            <div onClick={
              this.handleTodoOnclick.bind(this, this.state.checked, index, item)
              }>
              <input className="toggle" type="checkbox" />
              <span class="later circle"></span>
              <li class="left" key={index}>{item}
              <button class="delete">delete</button>
              </li>
            </div>
          )
        })}
      </ul>
    )
  }
}

export default Later;