import styled from 'styled-components';

const Button = styled.button`
  background: ${props => (props.bgColor ? '#0B41CD' : '#fff')};
  font-size: 2rem;
  line-height: 2.7rem;
  align: Center;
  letterspacing: 5%;
  margin: ${props => (props.margin ? props.margin : '')};
  height: ${props => (props.height ? props.height : '')};
  border-radius: 0.4rem;
  text-align: center;
  color: ${props => (props.danger ? '#CD160B' : props.bgColor ? '#fff' : '#0B41CD')};
  cursor: pointer;
  border: ${props => (props.danger ? '0.2rem solid #CD160B'
    : props.bgColor ? 'none' : '0.2rem solid #0B41CD')};
  text-transform: capitalize;
  transition: all 0.3s;
  width: ${props => (props.width ? props.width : 'auto')};
  padding: ${props => (props.sm ? '.4rem 2.5rem' : '.8rem 1.3rem')};
  display: ${props => (props.inlineButton ? 'inline-block' : 'block')};
  @media (max-width: 830px) {
    width: auto;
    line-height: 2rem;
    font-size: 1.7rem
  }
  @media (max-width: 355px) {
    width: auto;
    line-height: 1.5rem;
    padding: ${props => (props.sm ? '.4rem 1.5rem' : '.8rem 1.1rem')};
  }
`;

export default Button;
