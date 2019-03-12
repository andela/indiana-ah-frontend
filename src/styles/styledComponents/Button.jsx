/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

const Button = styled.button`
  background: ${props => (props.danger
    ? '#ffffff'
    : props.fbSocial
      ? '#315D99'
      : props.ggSocial
        ? '#F2F3F5'
        : '#ffffff')};
  font-family: Alegreya Medium;
  font-style: Regular;
  font-size: 2rem;
  align: Center;
  letterspacing: 5%;
  border-radius: 0.3rem;
  text-align: center;
  color: ${props => (props.danger
    ? '#CD160B'
    : props.fbSocial
      ? '#ffffff'
      : props.ggSocial
        ? '#365C67'
        : '#0b41cd')};
  font-weight: normal;
  cursor: pointer;
  border: ${props => (props.danger
    ? '0.12rem solid #CD160B'
    : props.fbSocial
      ? '0.3rem solid #315D99'
      : props.ggSocial
        ? '0.12rem solid #F2F3F5'
        : '0.12rem solid #0b41cd')};
  margin: 1rem;
  text-transform: capitalize;
  transition: all 0.3s;
  padding: .3rem 1rem 
  display: ${props => (props.inlineButton ? 'inline-block' : 'block')};
  text-transform: capitalize;
  width: ${props => (props.fbSocial || props.ggSocial ? '80%' : 'auto')};

  svg {
    height: 35px;
    width: 35px;
    padding: 0 10px 0 0;
  }
`;

export default Button;
