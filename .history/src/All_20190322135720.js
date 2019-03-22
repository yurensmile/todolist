import React, { Component } from 'react';
class All extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }
  // 点击了todo 列表的内容
  handleTodoOnclick(checked, index, item, e) {
    // if e.target is not text
    // let box = e.target.previousSibling;
    this.setState((preState) => {
      return { checked: !preState.checked }
    });
    if (checked) {
      // thing to later
      // e.target.style.textDecoration = 'none';
      // box.checked = false;

      // this.props.updateLaters(index, item);
    } else {
      // thing to have done
      // e.target.style.textDecoration = 'line-through';
      // box.checked = true;
      // 将all视为todo，如果todo中的某个被点击，则在todo中删除，并添加到havedone中
      // this.props.updateHavedones(index, item);
    }
  }

  render() {
    const { laters, havedones } = this.props;
    return (
      <ul>
        {laters.concat(havedones).map((item, index) => (
          <div 
            onClick={this.handleTodoOnclick.bind(this, this.state.checked, index, item)}
            key={index}
          >
            <input className="toggle" type="checkbox" />
            <span className="all circle"></span>
            <li>{item}</li>
          </div>
        ))}
      </ul>
    )
  }
}

export default All;