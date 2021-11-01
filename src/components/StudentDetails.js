import React from 'react';
import PropTypes from 'prop-types';

const StudentDetails = ({ dob, program, email }) => {
  return (
    <div>
      <h5>Date of Birth: {dob}</h5>
      <h5>Program: {program}</h5>
      <h5>Email Address: {email}</h5>
    </div>
  );
};

StudentDetails.propTypes = {
  dob: PropTypes.string.isRequired,
  program: PropTypes.string.isRequired,
  email: PropTypes.object.isRequired
};

export default StudentDetails;
