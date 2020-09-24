import styled from "styled-components";

//side containers to be used when the page requests a doble colum as main content
//so far, used by adCatefories, addMovies

const SideContainer = styled.div`
  width: 50%;
  height: 70vh;
  padding: 4% 2%;
  background-color: var(--lg-color);

  & li {
    display: block;
  }
 
  @media (max-width: 800px) {
    width: 100%;
    height: auto;
    padding: 0 2% 4% 2%;  
  }
`;

export default SideContainer;
