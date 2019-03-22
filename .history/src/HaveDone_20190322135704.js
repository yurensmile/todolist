import React, { Component } from 'react';

  class HaveDone extends Component{

  constructor(props){
    super(props);
    this.state = {
      checked: false,
    }
  }

  handleTodoOnclick(checked, index, item, e){
        this.props.updateLaters(index, item, e);    
  }

  render(){
    return(
      <ul>
          {this.props.havedones.map((item, index) => {
            return (
              <div key={index} onClick={this.handleTodoOnclick.bind(this, this.state.checked, index, item)}>
                <span className="havedone circle"></span>
                <li>{item}
                <button className="delete">delete</button>
              </li>
              </div>
            )
          })}
      </ul> 
    )
  }
}

export default HaveDone;