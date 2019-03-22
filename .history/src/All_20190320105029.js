import React, { Component } from 'react';
class All extends Component{

  constructor(props){
    super(props);
    this.state = {
      checked: false,
    };
  }
// 点击了todo 列表的内容
  handleTodoOnclick(checked, index, e){
  // if e.target is not text
      let box = e.target.previousSibling;
      this.setState((preState)=>{
        return {checked: !preState.checked}
      });
      if(checked){
        // thing to later
        e.target.style.textDecoration = 'none';
        box.checked = false;
        this.props.updateHavedones(index);
      }else{
        // thing to have done
        e.target.style.textDecoration = 'line-through';
        box.checked = true;
        this.props.updateLaters(index);
      }
      this.props.update(index);
    }

  render(){
    return (
      <ul>
          {this.props.all.map((item,index)=>{
            return (
              <div onClick={
                this.handleTodoOnclick.bind(this, this.state.checked, index)
                }>
                <input className="toggle" type="checkbox"/>
                <li key={index}>{item}</li>
              </div>
            )
          })}
      </ul> 
    )
  }
}

export default All;