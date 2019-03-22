import React, { Component } from 'react';

class HaveDone extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <ul>
          {this.props.HaveDone.map((item)=>{
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