import { ADD_TASK_IN_TODO, MOVE_TASK } from "../actionTypes";

const initialState = {
  byIds: []
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TASK_IN_TODO: {
      return {
        ...state,
        byIds: [
          ...state.byIds,
          {...action.payload}
        ]
      };
    }

    case MOVE_TASK: {
      return {
        ...state,
        byIds: action.payload.map(obj => ({...obj}))
      };
    }
    
    default:
      return state;
  }
}
