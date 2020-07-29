import styled from "styled-components";

const Button = styled.button`
  display: inline-block;
  padding: 12px 16px;
  background-color: var(--primary-color);
  border: none;
  border-radius: 4px;
  color: var(--white);
  font-weight: bold;
  &:hover,
  &:focus {
    transition: opacity 0.3s;
    opacity: 0.7;
  }
`;

export default Button;
