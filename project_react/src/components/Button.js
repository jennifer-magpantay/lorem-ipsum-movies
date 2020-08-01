import styled from "styled-components";

const Button = styled.button`
  display: inline;
  padding: 4px 12px;
  margin: 5px;
  font-size: 26px;
  border: 1px solid var(--white);
  background-color: var(--primary-color);
  color: var(--white);
  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export default Button;
