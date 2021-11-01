import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StudentDetails from './StudentDetails';
import { fetchStudentDetails } from '../actions/studentActions';

function StudentListItem(props) {
  const dispatch = useDispatch();
  const details = useSelector(state => state.students.details[props.student.id]);
  function handleLoadDetails() {
    dispatch(fetchStudentDetails(props.student.id));
  }

  return (
    <div>
      <button onClick={handleLoadDetails}>{props.student.name}</button>
      {details && details.address && (
        <StudentDetails
          dob={details.dob}
          program={details.program}
          email={details.email}
        />
      )}
    </div>
  );
}

export default StudentListItem;
