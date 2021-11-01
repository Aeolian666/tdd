import {
  FETCH_STUDENTS,
  ADD_STUDENT,
  FETCH_STUDENT_DETAILS
} from '../actions/types';

const initialState = {
  items: [],
  details: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_STUDENTS:
      return {
        ...state,
        items: action.data
      };

    case ADD_STUDENT:
      return {
        ...state,
        items: [...state.items, action.data]
      };

    case FETCH_STUDENT_DETAILS:
      const newDetails = { ...state.details };
      newDetails[action.data.id] = action.data;
      return {
        ...state,
        details: newDetails
      };

    default:
      return state;
  }
}
