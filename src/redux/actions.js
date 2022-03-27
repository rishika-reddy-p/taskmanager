import {
  ADD_TASK_IN_TODO,
  MOVE_TASK,
  DELETE_TASK,
  EDIT_TASK,
} from "./actionTypes";

export const addTaskInToDo = (payload) => ({
  type: ADD_TASK_IN_TODO,
  payload,
});

export const moveTask = (payload) => ({
  type: MOVE_TASK,
  payload,
});

export const deleteTask = (payload) => ({
  type: DELETE_TASK,
  payload,
});

export const editTask = (taskId, taskName) => ({
  type: EDIT_TASK,
  payload: {
    taskId,
    taskName,
  },
});
