import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MainContainer from "../containers/MainContainer";

const PageWrapper = styled(MainContainer)`
  background-color: var(--dk-color);
  padding: 4%;
`;

const Title = styled.h1`
  width: 75%;
  padding: 40px 0 0 40px;
  margin: 0 0 2% 0;
  color: var(--label);
  font-size: 4.6875em;
`;

const Message = styled.p`
  width: 60%;
  padding-left: 40px;
  margin: 0 0 2% 0;
  color: var(--white);
  font-size: 1.25em;
  line-height: 1.5;
`;

function ErrorScreen() {
  return (
    <div>
      <NavBar />
      <PageWrapper>
        <Title>Yikes! There is something really wrong hapenning here!</Title>
        <Message>
          It seems that the page yoy are trying to find is not available<br />
          Click on the link above to get back to the Home
        </Message>
      </PageWrapper>
      <Footer />
    </div>
  );
}

export default ErrorScreen;
