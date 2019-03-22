import React, { Component } from 'react';
import All from './All'

class Todos extends Component{

  render(){
    return(
      <div>
        {
          (()=>{
            switch(this.props.id){
              case 1: return <All all={this.props.all}/>;
              case 2: console.log("you clicked have dones");
              break;
              case 3: console.log("you clicked later");
              break;
              default: console.log("so funny");
            }
            
          })()}
      </div>
    )
  }
}
export default Todos;