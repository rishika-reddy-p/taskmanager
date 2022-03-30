import {
  ADD_TASK,
  MOVE_TASK,
  DELETE_TASK,
  EDIT_TASK,
} from "./actionTypes";

export const addTask = (id, name, status) => ({
  type: ADD_TASK,
  payload: {
    id, name, status
  },
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
