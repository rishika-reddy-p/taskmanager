import { ADD_TASK, DELETE_TASK, MOVE_TASK, EDIT_TASK } from "../actionTypes";
import { constructTask } from "./helpers/constructTask";
import { getRemainingTasks } from "./helpers/getRemainingTasks";
import { updateTasks } from "./helpers/updateTasks";

const initialState = {
  allTasks: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TASK: {
      const newTask = constructTask(action.payload);
      return {
        ...state,
        allTasks: [...state.allTasks, { ...newTask }],
      };
    }

    case MOVE_TASK: {
      return {
        ...state,
        allTasks: action.payload,
      };
    }

    case DELETE_TASK: {
      const taskIdToDelete = action.payload;
      const remainingTasks = getRemainingTasks(taskIdToDelete);
      const tempTasks = state.allTasks.filter(remainingTasks);
      return {
        ...state,
        allTasks: tempTasks,
      };
    }

    case EDIT_TASK: {
      const tempTasks = state.allTasks.map(
        updateTasks(action.payload.taskId, action.payload.taskName)
      );
      return {
        ...state,
        allTasks: tempTasks,
      };
    }

    default:
      return state;
  }
}
