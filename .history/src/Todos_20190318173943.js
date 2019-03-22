import React, { Component } from 'react';

class Todos extends Component{

  render(){
    return(
      <div>
        {
          (()=>{
            switch(this.props.id){
              case 1: console.log("ss");
              break;
              default: console.lgo("so funny");
            }
            
          })()}
      </div>
    )
  }
}
export default Todos;