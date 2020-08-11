import React from "react";
import styled from "styled-components";
import LaunchScreen from "./screens/LaunchScreen";

const AppWrapper = styled.div`
  background-color: var(--lg-color);
`;

function App() {
  return (
    <AppWrapper>
      <LaunchScreen />
    </AppWrapper>
  );
}

export default App;
