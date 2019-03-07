import React from 'react';
import PropTypes from "prop-types";
import Input from '../../styles/styled-components/input';

const InputField = ({ placeholder, width, type, id, value, handleChange }) => (
    <Input
    inputWidth={width}
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      required
    />

);

InputField.propTypes = {
  label: PropTypes.string,
  labelText: PropTypes.string,
  type: PropTypes.string.isRequired,
  width: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,

}
export default InputField;
