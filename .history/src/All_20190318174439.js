import React, { Component } from 'react';

class All extends Component{

  render(){
    return (
      <ul>
          {this.props.all.map((item)=>{
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

export default All;