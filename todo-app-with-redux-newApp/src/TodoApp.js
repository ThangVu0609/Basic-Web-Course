import React from "react";
import AddTodo from "./components/AddTodo";
import DeleteTodo from "./components/DeleteTodo";
import EditTodo from "./components/EditTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}
