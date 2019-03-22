import React, { Component } from 'react';

class Todos extends Component{

  render(){
    return(
      <div>
        {
          (()=>{
            <div>
            <ul>
              {this.props.todos.map((item)=>{
                return <li key={item.index}>{item}</li>
              })}
            </ul>
          </div>
          })()}
      </div>
    )
  }

export default Todos;