import React from "react";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid var(--lg-color);
`;
function MainContent() {
  return (
    <MainWrapper>
      <div className="content">
        <h1>Pee in the shoe catching very fast laser pointer</h1>
        <h3>Kitty poochy love you, then bite you poop on grasses</h3>
        <p>
          Cat ipsum dolor sit amet, lie in the sink all day yet get video posted
          to internet for chasing red dot. Sleep on my human's head eat prawns
          daintily with a claw then lick paws clean wash down prawns with a lap
          of carnation milk then retire to the warmest spot on the couch to claw
          at the fabric before taking a catnap. Cats are a queer kind of folk
          i'm going to lap some water out of my master's cup meow, claws in the
          eye of the beholder but pretend not to be evil.
        </p>
      </div>
      <img src="http://lorempixel.com/500/300/cats/" alt="Random fluffy cat" />
    </MainWrapper>
  );
}

export default MainContent;
