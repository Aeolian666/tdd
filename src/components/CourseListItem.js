import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadStudentsForCourse } from '../actions/courseActions';

const CourseListItem = props => {
  const dispatch = useDispatch();
  const students = useSelector(
    state => state.courses.students[props.course.id]
  );

  const handleLoadStudents = () => {
    dispatch(loadStudentsForCourse(props.course.id));
  };

  const renderListOfStudents = () => {
    if (students) {
      return students.map(student => <p key={student.id}>{student.name}</p>);
    } else {
      return;
    }
  };

  return (
    <div>
      <button onClick={handleLoadStudents}>{props.course.name}</button>
      {renderListOfStudents()}
    </div>
  );
};

export default CourseListItem;
