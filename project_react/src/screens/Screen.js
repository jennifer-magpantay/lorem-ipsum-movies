import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import MainContent from '../components/MainContent';
import Caroussel from '../components/Caroussel';
import Footer from '../components/Footer';

const ScreenWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--bc-color);
  color: var(--black);
`;

function Screen() {
  return (
    <ScreenWrapper className="screenWrapper">
      <NavBar />
        <MainContent />
        <Caroussel />
      <Footer />
    </ScreenWrapper>
  );
}

export default Screen;
