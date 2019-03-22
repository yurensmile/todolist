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
              case 1: return <Later laters={this.props.laters} 
                                  update={this.props.update}
                                  updateHavedones={this.props.updateHavedones}
                                  updateLaters={this.props.updateLaters}
                                  />;
              case 2: return <HaveDone havedones={this.props.havedones}/>;
              case 3: return <All all={this.props.all}/>
              default: console.log("sofunny");
            }
            
          })()}
      </div>
    )
  }
}
export default Todos;