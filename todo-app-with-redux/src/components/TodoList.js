import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
// import { getTodos } from "../redux/selectors";
import { getTodosByVisibilityFilter } from "../redux/selectors";
//import { VISIBILITY_FILTERS } from "../constants";
import EditTodo from "./EditTodo";
import CancelTodo from "./CancelTodo";
import UpdateTodo from "./UpdateTodo";

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return (
            <div>
              <Todo key={`todo-${todo.id}`} todo={todo} />
              {!todo.isEditting ? <EditTodo todoId={todo.id}></EditTodo> : null}
              {todo.isEditting && <CancelTodo todoId={todo.id}></CancelTodo>}
              {todo.isEditting && <UpdateTodo todoId={todo.id}></UpdateTodo>}
            </div>
          )
        })
      : "No todos, yay!"}
  </ul>
);

// const mapStateToProps = state => {
//   const { byIds, allIds } = state.todos || {};
//   const todos =
//     allIds && state.todos.allIds.length
//       ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
//       : null;
//   return { todos };
// };

const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
  //   const allTodos = getTodos(state);
  //   return {
  //     todos:
  //       visibilityFilter === VISIBILITY_FILTERS.ALL
  //         ? allTodos
  //         : visibilityFilter === VISIBILITY_FILTERS.COMPLETED
  //           ? allTodos.filter(todo => todo.completed)
  //           : allTodos.filter(todo => !todo.completed)
  //   };
};
// export default TodoList;
export default connect(mapStateToProps)(TodoList);
