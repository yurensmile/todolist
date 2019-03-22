import React, { Component } from 'react';

class Todos extends Component{

  render(){
    return void function(){
      return(
        <div>
        <ul>
          {this.props.todos.map((item)=>{
            return <li key={item.index}>{item}</li>
          })}
        </ul>
      </div>
      )
    }()
  }
}

export default Todos