import styled from "styled-components";

//button component
//the main style properties are set here
//however, each other component that will import button as its own component would be able to add/modify/override any of these properties
const Button = styled.button`
  width: 200px;
  padding: 12px 20px;
  margin-right: 1%;
  text-align: center;
  font-size: 14px;
  background-color: var(--blue);
  border: none;
  border-radius: 4px;
  box-shadow: var(--box-shadow);
  cursor: pointer;
  color: var(--white);
  transition: opacity 0.3s;
  
  &:hover,
  &:focus {
    opacity: 0.8;
  }
}

  @media (max-width: 800px) {
    font-size: 12px;
    padding: 10px;
  }
`;

export default Button;
