/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => (props.bgColor ? '#0B41CD' : '#fff')};
  font-size: 2rem;
  line-height: 2.7rem;
  align: Center;
  outline:none;
  letterspacing: 5%;
  border-radius: 0.4rem;
  text-align: center;
  color: ${props => (props.danger ? '#CD160B' : props.bgColor ? '#fff' : '#0B41CD')};
  cursor: pointer;
  border: ${props => (props.danger ? '0.2rem solid #CD160B' : props.bgColor ? '' : '0.2rem solid #0B41CD')};
  text-transform: capitalize;
  transition: all 0.3s;
  width: auto;
  padding: 0.8rem 1.5rem;
  display: ${props => (props.inlineButton ? 'inline-block' : 'block')};
  @media (max-width: 830px) {
    width: auto;
    line-height: 2rem;
    font-size: 1.7rem;
  }
  @media (max-width: 355px) {
    width: auto;
    line-height: 1.5rem;
    padding: ${props => (props.sm ? '.4rem 1.5rem' : '.8rem 1.1rem')};
  }
`;

export default Button;
