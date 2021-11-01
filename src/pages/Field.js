import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Field = (props) => {
  const [id, setId] = useState(props.id);
  const [type, setType] = useState(props.type);
  const [value, setValue] = useState(props.value);


  const handleChange = (event) => {
    setValue(event.target);
  }

  return (<div className="field" >
    <input
      id={id}
      type={type}
      value={value}
      onChange={handleChange}
    />
  </div>);
}


Field.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Field;
