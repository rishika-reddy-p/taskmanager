import { ADD_TASK_IN_TODO } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK_IN_TODO: {
      const { id, task } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            task,
          }
        }
      };
    }
    
    default:
      return state;
  }
}
