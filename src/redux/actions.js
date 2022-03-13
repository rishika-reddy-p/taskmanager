import { ADD_TASK_IN_TODO, MOVE_TASK } from "./actionTypes";

let nextTodoId = 0;

export const addTaskInToDo = task => ({
  type: ADD_TASK_IN_TODO,
  payload: {
    id: ++nextTodoId,
    task
  }
});

export const moveTask = payload => ({
  type: MOVE_TASK,
  payload: payload
})