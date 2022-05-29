import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    case DELETE_TODO: {
      const { id } = action.payload;
      let copyAllIds = [...state.allIds];
      let deleteResult = copyAllIds.filter(value =>{return (value !=id )});
      let copyByIds = {...state.byIds};
      delete copyByIds[id];
      return{
        ...state,
        allIds: deleteResult,
        byIds: copyByIds
      }
    }
    default:
      return state;
  }
}
