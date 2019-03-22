import React, { Component } from 'react';
class All extends Component{

  constructor(props){
    super(props);
    this.state = {
      checked: false,
    };
  }
// 点击了todo 列表的内容
  handleTodoOnclick(checked, index, item, e){
  // if e.target is not text
      let box = e.target.previousSibling;
      this.setState((preState)=>{
        return {checked: !preState.checked}
      });
      if(checked){
        // thing to later
        e.target.style.textDecoration = 'none';
        box.checked = false;
        // 如果在 点击了all列表中的，则
        this.props.updateLaters(index, item);
      }else{
        // thing to have done
        e.target.style.textDecoration = 'line-through';
        box.checked = true;
        this.props.updateHavedones(index, item);
      }
    }

    shouldComponentUpdate(nextProps, nextState) {
       console.log(this.props.all);
       console.log(nextProps.all);
        const isPropsChanged = this.props.all !== nextProps.all;
        console.log("isPropsChanged: " + isPropsChanged );
        return isPropsChanged;
    }

  render(){
    return (
      <ul>
          {this.props.all.map((item,index)=>{
            return (
              <div onClick={
                this.handleTodoOnclick.bind(this, this.state.checked, index, item)
                }>
                <input className="toggle" type="checkbox"/>
                <li style={{color:"red"}} key={index}>{item}</li>
              </div>
            )
          })}
      </ul> 
    )
  }
}

export default All;