import styled from "styled-components";

const BannerInfoContainer = styled.div`
  width: 60%;
  text-align: center;

  & h1 {
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  & h2 {
    font-weight: normal;
  }
  
  @media (max-width: 800px) {
    width: 100%;
    text-align: left;
  }
`;

export default BannerInfoContainer;