import { ADD_TODO, TOGGLE_TODO, SET_FILTER,EDIT_TODO,CANCEL_TODO,UPDATE_TODO,ONCHANGE_TODO } from "./actionTypes";

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

export const editTodo = id => ({
  type: EDIT_TODO,
  payload:{id}
});

export const cancelTodo = id => ({
  type: CANCEL_TODO,
  payload:{id}
});

export const updateTodo = id => ({
  type: UPDATE_TODO,
  payload:{id}
});

export const onChangeTodo = (id,content) => ({
  type: ONCHANGE_TODO,
  payload:{
    id,
    content
  }
});
export const setFilter = filter => ({ type: SET_FILTER, payload: { filter } });
