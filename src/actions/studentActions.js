import { FETCH_STUDENTS, ADD_STUDENT, FETCH_STUDENT_DETAILS } from './types';

export const fetchStudents = () => dispatch => {
  return fetch(
    'https://rest-example-node.abc.com/v1/students'
  )
    .then(res => res.json())
    .then(students =>
      dispatch({
        type: FETCH_STUDENTS,
        data: students
      })
    );
};

export const addStudent = student => dispatch => {
  dispatch({
    type: ADD_STUDENT,
    data: student
  });
};

export const fetchStudentDetails = id => dispatch => {
  return fetch(
    `https://student-info.abc.com/v1/student/${id}`
  )
    .then(response => response.json())
    .then(studentDetails => {
      dispatch({
        type: FETCH_STUDENT_DETAILS,
        data: studentDetails
      });
    });
};
