import React from 'react';
import PropTypes from "prop-types";
import { InputGroup ,FormControl } from 'react-bootstrap';

const Input = ({ placeholder, type, id, value, handleChange}) => (
  <InputGroup >
    <FormControl 
      id={id} 
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      required
    />
  </InputGroup vcxfdrtybhukljkjgtyrterwaeestyugihojuijgvfdsaew456ruy8hi;,.>
);

Input.propTypes = {
  label: PropTypes.string,
  labelText: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,

}
export default InputField;