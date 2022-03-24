import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { nanoid } from 'nanoid'
import './index.css'


export default class Header extends Component {
  

  // 对接收的props进行类型必要性的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }
  
  // 键盘事件的回调
  handleKeyUp = (event) => {
    const { keyCode, target} = event;
    if(keyCode !== 13) return;
    // 添加的todo名字不能为空
    if(target.value.trim() === ''){
      alert("输入内容不能为空");
      return;
    }
  //  准备好一个todo对象
    const todoObj = {id: nanoid(), name: target.value, done: false}
    // 将todoobj传递给app
    this.props.addTodo(todoObj);
    target.value = '';
  }
  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
      </div>
    )
  }
}
