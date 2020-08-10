import styled from "styled-components";

//button component
const Button = styled.button`
  display: inline;
  width: 150px;
  padding: 12px 16px;
  margin-right: 1%;
  text-align: center;
  font-size: 18px;
  border: none;
  background-color: var(--blue);
  color: var(--white);
  transition: opacity 0.3s;
  &:hover,
  &:focus {
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    width: 100px;
    font-size: 14px;
   }
`;

export default Button;
