import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "learn reactJS" },
      { id: 2, content: "play assassin's creed II" },
    ]
  }
  deleteTodo = (id) => {
    console.log(id);
    const todos = this.state.todos.filter((todo) => {
      return todo['id'] !== id;
    });
    this.setState({
      todos: todos
    });
  };
  addTodo = (content) => {
    console.log(content);
    const todo = { id: Math.random(), content: content };
    this.setState({
      todos: [...this.state.todos, todo]
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text"> Todo's </h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App;

