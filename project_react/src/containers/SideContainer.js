import styled from "styled-components";

const SideContainer = styled.div`
  width: 50%;
  height: 60vh;
  padding: 4% 2%;
  background-color: var(--lg-color);
 
  @media (max-width: 800px) {
    width: 100%; 
    padding: 1% 2%;  
  }
`;

export default SideContainer;
