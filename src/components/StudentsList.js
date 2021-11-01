import React, { useEffect } from 'react';
import StudentListItem from './StudentListItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from '../actions/studentActions';

const StudentsList = () => {
  const dispatch = useDispatch();
  const students = useSelector(state => state.students.items);

  // only runs once on component mount
  useEffect(() => {
    dispatch(fetchStudents());
  }, []);

  return (
    <>
      <h2>Students List</h2>
      {
        students.map((student) => (<StudentListItem key={student.id} student={student} />))
      }
    </>
  );
}

export default StudentsList;
