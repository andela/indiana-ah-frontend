import styled from 'styled-components';

const Button = styled.button`
  background: #fff;
  font-family: Alegreya Medium;
  font-style: Regular;
  font-size: 20px;
  line-height: 27px;
  align: Center;
  letterspacing: 5%;
  border-radius: 0.3rem;
  text-align: center;
  color: ${props => (props.danger ? '#CD160B' : '#0B41CD')};
  cursor: pointer;
  border: ${props => (props.danger ? '0.12rem solid #CD160B' : '0.12rem solid #0B41CD')};
  margin: 1rem;
  text-transform: capitalize;
  transition: all 0.3s;
  width: auto;
  padding: .2rem .6rem 
  display: ${props => (props.inlineButton ? 'inline-block' : 'block')};
`;

export default Button;
