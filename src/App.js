import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'
export default class APP extends Component {
 
// 状态在哪里，操作状态的方法在哪里


//  初始化状态
  state = {
    todos: [
      {id: '001',name: '吃饭', done: true},
      {id: '002',name: '睡觉', done: true},
      {id: '003',name: '打代码', done: false}
    ]
  }
// 用于添加一个todo,接收的参数是todo对象
  addTodo = (todoObj) => {
    // 获取原有todos
    const {todos} = this.state;
    // 追加一个todo
    const newTodos = [todoObj, ...todos]
    // 更新状态
    this.setState({todos:newTodos});
  }

// 用于更新一个todo选项
  updateTodo = (id,done) => {
     const {todos} = this.state;
     const newTodos = todos.map((todoObj) => {
       if(todoObj.id === id)
        return {...todoObj,done:done}
       else
        return todoObj
     })
     this.setState({todos:newTodos})
  }

// 用于删除一个todo选项
  deleteTodo = (id) => {
    const {todos} = this.state;
    // 删除指定id的todo对象
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    })
    this.setState({todos: newTodos})
  }

  // 全选按钮
    checkAllTodo = (done) => {
      const {todos} = this.state;
      const newTodos = todos.map((todoObj) => {
        return {...todoObj,done:done}
      })
      this.setState({todos: newTodos})
  }

  deleteAllTodo = () => {
    const {todos} = this.state;
    const newTodos = todos.filter((todoObj) => {
      return todoObj.done === false;
    })
    this.setState({todos: newTodos})
  }


  render() {
    const { todos } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo = {this.addTodo}/>
          <List todos = {todos} updateTodo = {this.updateTodo} deleteTodo = {this.deleteTodo}/>
          <Footer todos = {todos} checkAllTodo = {this.checkAllTodo} deleteAllTodo = {this.deleteAllTodo}/>
        </div>
    </div>
    )
  }
}
