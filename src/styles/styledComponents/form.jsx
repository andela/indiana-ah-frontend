import styled from 'styled-components';

const FormContainer = styled.form`
  max-width: 36%;
  text-align: center;
  background: #fff;
  border-radius: 0.3rem;
  margin: 1rem;
  border: 0.5rem solid #fff;
  box-shadow: 3px 3px 26px 1px rgba(0, 0, 0, 0.49);
`;

const FormTitle = styled.h1`
  font-size: 2.5rem;
  margin: 0.2rem 0 2rem 0;
  text-transform: capitalize;
  color: #0b41cd;
  font-family: Alegreya Medium;
`;

export { FormContainer, FormTitle };
