import { ADD_TODO, TOGGLE_TODO, EDIT_TODO,CANCEL_TODO,UPDATE_TODO, ONCHANGE_TODO } from "../actionTypes";

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
    case EDIT_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            isEditting: true
          }
        }
      };
    }
    case CANCEL_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            isEditting: false
          }
        }
      };
    }
    case UPDATE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            content: state.byIds[id].newContent ? state.byIds[id].newContent : state.byIds[id].content,
            isEditting: false
          }
        }
      };
    }
    case ONCHANGE_TODO: {
      const { id,content } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            newContent: content
          }
        }
      }
    }
    default:
      return state;
  }
}
