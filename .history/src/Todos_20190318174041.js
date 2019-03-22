import React, { Component } from 'react';

class Todos extends Component{

  render(){
    return(
      <div>
        {
          (()=>{
            switch(this.props.id){
              case 1: console.log("you clicked all");
              break;
              case 2: console.log("you clicked have dones");
              break;
              case 3: console.log("you clicked no");
              break;
              default: console.lgo("so funny");
            }
            
          })()}
      </div>
    )
  }
}
export default Todos;