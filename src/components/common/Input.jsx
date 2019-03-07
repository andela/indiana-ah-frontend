import React from 'react';
import PropTypes from "prop-types";
import Input from '../../styles/styledComponents/input';

const InputField = ({ placeholder, width, type, id, value, handleChange}) => (
  <div>
    <Input
      inputWidth={width}
      id={id} 
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      required
    />
  </div>   
);

InputField.propTypes = {
  label: PropTypes.string,
  labelText: PropTypes.string,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,

}
export default InputField;