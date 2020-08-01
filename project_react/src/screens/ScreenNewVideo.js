import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ScreenWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  color: white;
`;

function ScreenNewVideo() {
  return (
    <ScreenWrapper className="screenWrapper">
      <NavBar />
        <h1>ADD NEW VIDEO</h1>
      <Footer />
    </ScreenWrapper>
  );
}

export default ScreenNewVideo;
