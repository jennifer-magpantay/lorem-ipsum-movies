import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";

// import Button from "../components/Button";
//import {Link} from 'react-router-dom';

const ScreenWrapper = styled.div`
  width: 100%;
  top: 0;
  height: 100vh;
  background-color: var(--dk-color);
`;

const MainMessage = styled.h1`
  padding: 100px 0 0 100px;
  color: var(--lg-color);
  font-size: 60px;
`;

const Message = styled.h3`
padding-left: 100px;
  color: var(--white);
  font-size: 20px;
  font-weight: normal;
`;

// const ButtonHome = styled(Button)`
//   width: 150px;
//   padding: 12px;
//   background-color: var(--dk-color);
//   font-size: 16px;
// `;

function ScreenError() {
  return (
    <ScreenWrapper>
      <NavBar />
      <MainMessage>Something is really wrong here</MainMessage>
      <Message>We can't find the page you're looking for</Message>
      <Message>Click on the link above to get back to Home</Message>
    </ScreenWrapper>
  );
}

export default ScreenError;
