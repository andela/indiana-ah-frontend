import styled from 'styled-components';
// Create an Input component that'll render an <input> tag with some styles
const Input = styled.input`
  padding: 0.5em;
  margin: 0.3em;
  color: ${props => props.inputColor || 'palevioletred'};
  height: 2.688rem;
  background: #FFFFFF;
  border: 0.5px solid rgba(0, 0, 0, 0.4);
  border-radius: 0.1875rem;
  width: 23.19rem;
  box-sizing: border-box;
`;

export default Input;
