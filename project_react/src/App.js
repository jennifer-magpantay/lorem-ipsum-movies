import React from "react";
import styled from "styled-components";
import HomeScreen from './screens/HomeScreen';

const AppWrapper = styled.div`
background-color: var(--lg-color);
`;

function App() {
  return (
    <AppWrapper>
      <HomeScreen />
      </AppWrapper>
  );
}

export default App;
