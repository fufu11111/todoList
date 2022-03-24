import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {


  handleCheckall = (event) => {
    this.props.checkAllTodo(event.target.checked)

  }

  handleClearDone = () => {
    this.props.deleteAllTodo()
  }

  render() {
    const { todos } = this.props;
    // 已完成的个数
    const doneCount = todos.filter((item) => item.done === true) .length
    const total = todos.length;
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={doneCount === total && total !== 0? true : false} onChange={this.handleCheckall}/>
        </label>
        <span>
          <span>已完成{doneCount}</span> / 全部{total}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearDone}>清除已完成任务</button>
      </div>
    )
  }
}
