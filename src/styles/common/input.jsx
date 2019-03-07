import styled from 'styled-components';
// Create an Input component that'll render an <input> tag with some styles
const Input = styled.input`
  padding: 0.8rem;
  margin: 0.8rem;
  height: 4.3rem;
  background: #FFFFFF;
  border: 0.05rem solid rgba(0, 0, 0, 0.4);
  border-radius: 0.4rem;
  width: ${props => props.inputWidth || "37.1rem"};
  box-sizing: border-box;
`;

export default Input;