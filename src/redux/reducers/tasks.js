import { ADD_TASK_IN_TODO } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK_IN_TODO: {
      const { id, content } = action.payload;
      console.log("state", state)
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
          }
        }
      };
    }
    
    default:
      return state;
  }
}
