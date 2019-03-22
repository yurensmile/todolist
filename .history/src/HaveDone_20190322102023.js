import React, { Component } from 'react';

  class HaveDone extends Component{

  constructor(props){
    super(props);
    this.state = {
      checked: false,
    }
  }

  handleTodoOnclick(checked, index, item, e){
  // if e.target is not text
      // let box = e.target.previousSibling;
      this.setState((preState)=>{
        return {checked: !preState.checked}
      })

      if(checked){
        //如果havedone中的某个被点击，则在havedone中删除，并添加到later中
        this.props.updateLaters(index, item, e);
      }                   
    }

  render(){
    return(
      <ul>
          {this.props.havedones.map((item, index)=>{
            return (
              <div onClick={this.handleTodoOnclick.bind(this, this.state.checked, index, item)}>
                <input className="toggle" type="checkbox"/>
                <span class="havedone circle"></span>
                <li key={index}>{item}
                <button class="delete">delete</button>
              </li>
              </div>
            )
          })}
      </ul> 
    )
  }
}

export default HaveDone;