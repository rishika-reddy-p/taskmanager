import { ADD_TASK_IN_TODO } from "./actionTypes";

let nextTodoId = 0;

export const addTaskInToDo = task => ({
  type: ADD_TASK_IN_TODO,
  payload: {
    id: ++nextTodoId,
    task
  }
});