import React, { Component } from 'react';

class Later extends Component{
  constructor(props){
    super(props);
    this.state = {
      checked: false,
    };
  }

  // 点击了todo 列表的内容
  handleTodoOnclick(checked, index, item, e){
    // if e.target is not text
        // let box = e.target.previousSibling;
        this.setState((preState)=>{
          return {checked: !preState.checked}
        });
        if(checked){

        }else{
  //如果later中的某个被点击，则在later中删除，并添加到havedone中
          console.log(e.target.innerHTML);
          this.props.updateHavedones(index, item);
        }
      }
  render(){
    return (
      <ul>
        {this.props.laters.map((item, index)=>{
          return (
            <div onClick={
              this.handleTodoOnclick.bind(this, this.state.checked, index, item)
              }>
              <input className="toggle" type="checkbox"/>
              <li class="left" style={{color: "red"}} key={index}>{item}</li>
              <button>delete</button>
            </div>
          )
        })}
      </ul>
    )
  }
}

export default Later;