import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Input from '../../styles/styledComponents/Input.jsx';


const InputField = ({
  placeholder, width, type, id, value, errorMessage, handleChange, onBlur
}) => (
  <div>
    <Input
      inputWidth={width}
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      onBlur = {onBlur}
      required
    />
    {
      <Form.Text className="text-danger ml-3">
      {errorMessage}
      </Form.Text>
    }

  </div>
);

InputField.propTypes = {
  label: PropTypes.string,
  labelText: PropTypes.string,
  type: PropTypes.string.isRequired,
  width: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,

};
export default InputField;
