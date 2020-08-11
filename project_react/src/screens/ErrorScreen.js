import React from "react";
import styled from "styled-components";
import DefaultTemplate from "../templates/DefaultTemplate";
import MainContainer from "../containers/MainContainer";

const PageWrapper = styled(MainContainer)`
  height: 80vh;
  background-color: var(--dk-color);
  padding: 5%;

  @media (max-width: 800px) {
    height: 30vh;  
    padding: 4%;  
  }
`;

const Title = styled.h1`
  width: 75%;
  margin: 0 0 2% 0;
  color: var(--blue);
  font-size: 4.6875em;

  @media (max-width: 800px) {
    margin: 0;
    font-size: 1.5em;
  } 
`;

const Message = styled.p`
  width: 60%;
  margin: 0 0 2% 0;
  color: var(--white);
  font-size: 1.25em;
  line-height: 1.5;

  @media (max-width: 800px) {
    width: 65%;
    margin: 0;
    font-size: 0.875em;
    line-height: normal;
    
  }

`;

function ErrorScreen() {
  return (
    <DefaultTemplate>
      <PageWrapper>
        <Title>Yikes! There is something really wrong hapenning here!</Title>
        <Message>
          It seems that the page yoy are trying to find is not available
          <br />
          Click on the link above to get back to the Home
        </Message>
      </PageWrapper>
    </DefaultTemplate>
  );
}

export default ErrorScreen;
