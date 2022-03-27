import {
  ADD_TASK_IN_TODO,
  DELETE_TASK,
  MOVE_TASK,
  EDIT_TASK,
} from "../actionTypes";
import { TASK_STATUS } from "../../common/constants/task/status";
import uuid from "react-uuid";

const initialState = {
  allTasks: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TASK_IN_TODO: {
      const newTaskId = uuid();
      return {
        ...state,
        allTasks: [
          ...state.allTasks,
          {
            id: newTaskId,
            task: {
              name: action.payload,
              status: TASK_STATUS.TODO,
            },
          },
        ],
      };
    }

    case MOVE_TASK: {
      return {
        ...state,
        allTasks: action.payload.map((obj) => ({ ...obj })),
      };
    }

    case DELETE_TASK: {
      const taskIdToDelete = action.payload;
      const tempTasks = state.allTasks.filter((task) => {
        return task.id !== taskIdToDelete;
      });
      return {
        ...state,
        allTasks: tempTasks,
      };
    }

    case EDIT_TASK: {
      const tempTasks = state.allTasks.map((task) => {
        if (task.id === action.payload.taskId) {
          return {
            ...task,
            task: {
              ...task.task,
              name: action.payload.taskName,
            },
          };
        }
        return task;
      });
      return {
        ...state,
        allTasks: tempTasks,
      };
    }

    default:
      return state;
  }
}
