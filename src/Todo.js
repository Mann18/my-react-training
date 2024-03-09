import React, { Component } from "react";
import "./Todo.css";
import Footer from "./Footer";
import Navigation from "./Navigation";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      todoList: JSON.parse(localStorage.getItem("todoList")) || [],
      editingIndex: null,
    };
  }

  handleChange = (event) => {
    this.setState({ task: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { task, todoList, editingIndex } = this.state;
    if (task.trim() !== "") {
      const updatedList =
        editingIndex !== null
          ? [
              ...todoList.slice(0, editingIndex),
              task,
              ...todoList.slice(editingIndex + 1),
            ]
          : [...todoList, task];
      this.setState({ todoList: updatedList, task: "", editingIndex: null });
      localStorage.setItem("todoList", JSON.stringify(updatedList));
    }
  };

  handleEdit = (index) => {
    const { todoList } = this.state;
    this.setState({ task: todoList[index], editingIndex: index });
  };

  handleDelete = (index) => {
    const { todoList } = this.state;
    const updatedList = [
      ...todoList.slice(0, index),
      ...todoList.slice(index + 1),
    ];
    this.setState({ todoList: updatedList, task: "", editingIndex: null });
    localStorage.setItem("todoList", JSON.stringify(updatedList));
  };

  render() {
    const { task, todoList } = this.state;

    return (
      <>
        <Navigation />
        <div className="todo-container">
          <h2>Todo List</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={task}
              onChange={this.handleChange}
              placeholder="Enter task"
              className="input-field"
            />
            <button type="submit">
              {this.state.editingIndex !== null ? "Update Task" : "Add Task"}
            </button>
          </form>
          <ul>
            {todoList.map((task, index) => (
              <li key={index}>
                <span>{task}</span>
                <button onClick={() => this.handleEdit(index)}>Edit</button>
                <button onClick={() => this.handleDelete(index)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
        <Footer />
      </>
    );
  }
}

export default Todo;
