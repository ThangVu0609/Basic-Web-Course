import { ADD_TODO,  TOGGLE_TODO, DELETE_TODO, EDIT_TODO, SET_FILTER } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  payload:{id}
});

export const editTodo = id => ({
  type: EDIT_TODO,
  payload:{id}
});
export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
