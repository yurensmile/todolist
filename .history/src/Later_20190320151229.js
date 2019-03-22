import React, { Component } from 'react';
class Later extends Component{


  render(){
    return (
      <ul>
        {this.props.laters.map((item, index)=>{
          return (
            <div>
              <input className="toggle" type="checkbox"/>
              <li style={{color: "blue"}} key={index}>{item}</li>
            </div>
          )
        })}
      </ul>
    )
  }
}

export default Later;