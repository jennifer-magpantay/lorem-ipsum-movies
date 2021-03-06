import styled from "styled-components";

//container to hold the banner informations - banner/launchbanner

const BannerInfoContainer = styled.div`
  width: 100%;
  text-align: center;
  line-height: normal;

  & h1 {
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  & h2 {
    font-weight: normal;
    margin-bottom: 1%;
  }

  @media (max-width: 800px) {
    & h1, & h2 {
    width: 98%;
  }
       
  }
`;

export default BannerInfoContainer;
