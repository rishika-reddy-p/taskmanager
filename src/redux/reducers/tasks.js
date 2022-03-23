import { ADD_TASK_IN_TODO, MOVE_TASK } from "../actionTypes";
import { TASK_STATUS } from "../../common/constants/task/status";

const initialState = {
  byIds: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TASK_IN_TODO: {
      const newTaskId = state.byIds.length + 1;
      return {
        ...state,
        byIds: [
          ...state.byIds,
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
        byIds: action.payload.map((obj) => ({ ...obj })),
      };
    }

    default:
      return state;
  }
}
