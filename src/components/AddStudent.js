import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../actions/studentActions';

const AddStudent = () => {
  const studentNameInputRef = useRef(null);
  const dispatch = useDispatch();

  const handleAddStudent = () => {
    dispatch(
      addStudent({
        id: Date.now().toString(),
        name: studentNameInputRef.current.value
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Student Manhattan"
        ref={studentNameInputRef}
      />
      <button onClick={handleAddStudent}>Add</button>
    </div>
  );
};

export default AddStudent;
