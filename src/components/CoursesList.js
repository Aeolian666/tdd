import React, { useEffect } from 'react';
import CourseListItem from './CourseListItem';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCourses } from '../actions/courseActions';

const CoursesList = () => {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.items);

  useEffect(() => {
    dispatch(fetchCourses());
  }, []);

  return (
    <>
      <h1>Courses List</h1>
      {courses.map(course => (
        <CourseListItem key={course.id} course={course} />
      ))}
    </>
  );
};

export default CoursesList;
