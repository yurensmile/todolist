import React, { Component } from 'react';
import All from './All'
import HaveDone from './HaveDone'

class Todos extends Component{

  render(){
    return(
      <div>
        {
          (()=>{
            switch(this.props.id){
              case 1: return <All all={this.props.all}/>;
              case 2: return <HaveDone havedones={this.props.havedones}/>;
              case 3: console.log("later"); break;
              default: console.log("sofunny");
            }
            
          })()}
      </div>
    )
  }
}
export default Todos;