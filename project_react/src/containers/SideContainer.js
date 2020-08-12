import styled from "styled-components";

const SideContainer = styled.div`
  width: 50%;
  height: 70vh;
  padding: 4% 2%;
  background-color: var(--lg-color);
 
  @media (max-width: 800px) {
    width: 100%;
    height: auto;
    width: 100%; 
    padding: 0 2% 4% 2%;  
  }
`;

export default SideContainer;
