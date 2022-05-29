import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo,onChangeTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodo, onChangeTodo }) => {
  console.log("afsdfsd",todo);
  if(todo.isEditting){
    return (
      <div>
        <input 
          type="text" defaultValue={todo.content}
          onChange={e => onChangeTodo(todo.id,e.target.value)}
        >
        </input>
      </div>
    );
  }
  else{
    return (
      <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
        {todo && todo.completed ? "👌" : "👋"}{" "}
        <span
          className={cx(
            "todo-item__text",
            todo && todo.completed && "todo-item__text--completed"
          )}
        >
          {todo.content}
        </span>
        {/* <button>del</button> */}
      </li>
    );
  }
}

// export default Todo;
export default connect(
  null,
  { toggleTodo, onChangeTodo }
)(Todo);
