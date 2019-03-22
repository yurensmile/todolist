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
              case 1: return <All all={this.props.all} 
                                  update={this.props.update}
                                  updateHavedones={this.props.updateHavedone}
                                  updateLaters={this.props.updateLater}
                                  />;
              case 2: return <HaveDone havedones={this.props.havedones}/>;
              case 3: return <Later laters={this.props.laters}/>
              default: console.log("sofunny");
            }
            
          })()}
      </div>
    )
  }
}
export default Todos;