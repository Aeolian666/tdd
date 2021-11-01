import { FETCH_COURSES, LOAD_STUDENTS_FOR_COURSE } from '../actions/types';

const initialState = {
  items: [],
  students: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSES:
      return {
        ...state,
        items: action.data
      };

    case LOAD_STUDENTS_FOR_COURSE:
      const newStudents = { ...state.students };
      newStudents[action.id] = action.data;
      return {
        ...state,
        students: newStudents
      };

    default:
      return state;
  }
}
