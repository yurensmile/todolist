import React, { Component } from 'react';
import All from './All'
import HaveDone from './HaveDone'
import Later from './Later'

class Todos extends Component{

  render(){
    return(
      <div>
        {
          (()=>{
            switch(this.props.id){
              case 1: return <Later 
                                laters={this.props.laters} 
                                updateHavedones={this.props.updateHavedones}
                              />;
              case 2: return <HaveDone 
                                havedones={this.props.havedones}
                                updateLaters={this.props.updateLaters}
                              />;
              case 3: return <All 
                                laters={this.props.laters} 
                                havedones={this.props.havedones}
                              />;
              default: console.log("sofunny");
            }
            
          })()}
      </div>
    )
  }
}
export default Todos;