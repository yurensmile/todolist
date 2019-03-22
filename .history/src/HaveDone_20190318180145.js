import React, { Component } from 'react';

class HaveDone extends Component{
  constructor(props){
    super(props);
    this.state = {
      checked: false
    }
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

  render(){
    return(
      <ul>
          {this.props.havedones.map((item)=>{
            return (
              <div onClick={this.handleTodoOnclick.bind(this, this.state.checked)}>
                <input className="toggle" type="checkbox"/>
                <li key={item.id}>{item}</li>
              </div>
            )
          })}
      </ul> 
    )
  }
}

export default HaveDone;