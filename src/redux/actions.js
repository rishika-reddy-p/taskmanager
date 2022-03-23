import { ADD_TASK_IN_TODO, MOVE_TASK } from "./actionTypes";

export const addTaskInToDo = task => ({
  type: ADD_TASK_IN_TODO,
  payload: task
});

export const moveTask = payload => ({
  type: MOVE_TASK,
  payload: payload
})