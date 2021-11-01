import { FETCH_COURSES, LOAD_STUDENTS_FOR_COURSE } from './types';

export const fetchCourses = () => dispatch => {
  return fetch(
    'https://rest-example-node.abc.com/v1/courses'
  )
    .then(res => res.json())
    .then(courses =>
      dispatch({
        type: FETCH_COURSES,
        data: courses
      })
    );
};

export const loadStudentsForCourse = id => dispatch => {
  const GQL_API =
    'https://graphql-student-course.abc.com/';
  const GQL_QUERY = `
  query($id:ID!) {
    course(id: $id) {
      students {
        name
      id
      }
    }
  }
`;

  return fetch(GQL_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: GQL_QUERY,
      variables: { id }
    })
  })
    .then(response => response.json())
    .then(result => {
      dispatch({
        type: LOAD_STUDENTS_FOR_COURSE,
        data: result.data.course.students,
        id
      });
    });
};
