import { ADD_TASK_IN_TODO } from "./actionTypes";

let nextTodoId = 0;

export const addTaskInToDo = content => ({
  type: ADD_TASK_IN_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});