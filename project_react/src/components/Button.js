import styled from "styled-components";


//button component
const Button = styled.button`
  width: 200px;
  padding: 12px 20px;
  margin-right: 1%;
  text-align: center;
  font-size: 16px;
  background-color: var(--blue);
  border: none;
  border-radius: 4px;
  color: var(--white);
  transition: opacity 0.3s;

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  @media (max-width: 800px) {
    width: 80px;
    font-size: 12px;
  }
`;

export default Button;
