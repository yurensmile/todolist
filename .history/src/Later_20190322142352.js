import React, { Component } from 'react';

class Later extends Component {

  // 点击了later列表的内容
  handleTodoOnclick(index, item, e) {
    this.props.updateHavedones(index, item, e);
  }

  render() {
    return (
      <ul>
        {this.props.laters.map((item, index) => (
          <div key={index} onClick={this.handleTodoOnclick.bind(this, index, item)}>
            <span className="later circle"></span>
            <li className="left" key={index}>{item}
              <button className="delete">delete</button>
            </li>
          </div>
        ))}
      </ul>
    )
  }
}

export default Later;