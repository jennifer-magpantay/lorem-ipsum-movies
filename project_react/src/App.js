import React from "react";
import styled from "styled-components";

//import components
import MenuNav from "./components/MenuNav/index";
import BannerMain from "./components/BannerMain/index";
import Footer from "./components/Footer/index";

const AppWrapper = styled.div`
  padding-top: 94px;
  background-color: var(--bc-color);

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`;

function App() {
  return (
    <AppWrapper>
      <MenuNav />
      <BannerMain />
      <Footer />
    </AppWrapper>
  );
}

export default App;
