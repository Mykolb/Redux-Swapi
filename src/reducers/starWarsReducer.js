import {
  FETCH_CHARACTER_FETCHING, 
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_FAILURE} from "../actions";


const initialState = {
  characters: [],
  boolean: true,
  error: null
  // Array characters, Boolean fetching, null error.
};


export const charsReducer = (state = initialState, action) => {
  console.log('charsreducer', action);
  switch (action.type) {
    case FETCH_CHARACTER_FETCHING:
    return {
      ...state,
      error: null,
      boolean: true
    };
    case FETCH_CHARACTER_SUCCESS:
    return {
      ...state,
      characters: action.payload,
      boolean: true,
      error: null
    };
    case FETCH_CHARACTER_FAILURE:
    return {
      ...state,
      error: action.payload,
      boolean: false
    }

    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};

export default charsReducer;