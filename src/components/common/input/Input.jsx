import styled from 'styled-components';
// Create an Input component that'll render an <input> tag with some styles
const Input = styled.input`
  display:flex;
  padding: 0.8rem;
  margin: ${props => props.margin || '0.8rem auto'};
  height: 4.3rem;
  fill: #FBFCFF;
  border: 0.05rem solid rgba(0, 0, 0, 0.4);
  border-radius: 0.4rem;
  width: ${props => props.inputWidth || '94%'};
  box-sizing: border-box;
  @media (max-width: 76.8rem) {
    flex-direction: column;
    height: 3.5rem;
    font-size: 1.5rem
  }
`;

export default Input;
