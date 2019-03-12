import styled from 'styled-components';

const Button = styled.button`
  background: ${props => (props.bgColor ? '#0B41CD' : '#fff')};
  font-size: 20px;
  line-height: 27px;
  align: Center;
  letterspacing: 5%;
  border-radius: 0.4rem;
  text-align: center;
  color: ${props => (props.danger ? '#CD160B' : props.bgColor ? '#fff' : '#0B41CD')};
  cursor: pointer;
  border: ${props => (props.danger ? '0.2rem solid #CD160B'
    : props.bgColor ? '' : '0.2rem solid #0B41CD')};
  text-transform: capitalize;
  transition: all 0.3s;
  width: auto;
  padding: .8rem 1.5rem 
  display: ${props => (props.inlineButton ? 'inline-block' : 'block')};
`;

export default Button;
