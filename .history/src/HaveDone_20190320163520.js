import React, { Component } from 'react';

  class HaveDone extends Component{

  constructor(props){
    super(props);
    this.state = {
      checked: false,
    }
  }

  handleTodoOnclick(checked, e){
  // if e.target is not text
      // let box = e.target.previousSibling;
      this.setState((preState)=>{
        return {checked: !preState.checked}
      })

      if(checked){
        // e.target.style.textDecoration = 'none';
        // box.checked = false;
      }else{
        // e.target.style.textDecoration = 'line-through';
        // box.checked = true;
        //如果havedone中的某个被点击，则在havedone中删除，并添加到later中
        this.props.updateLaters(index, item);
      }                   
    }

  render(){
    return(
      <ul>
          {this.props.havedones.map((item, index)=>{
            return (
              <div onClick={this.handleTodoOnclick.bind(this, this.state.checked, index, item)}>
                <input className="toggle" type="checkbox"/>
                <li style={{color: "green"}} key={index}>{item}</li>
              </div>
            )
          })}
      </ul> 
    )
  }
}

export default HaveDone;