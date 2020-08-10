import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

const SlideWrapper = styled.div`
  width: 100%;
  margin: 1% 0 2% 0;
  padding: 0 2% 0 2%;
  background-color: var(--lg-color);
  border-radius: 5px;
  opacity: .5;
`;

class SlickCarousel extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      fade: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
    };
    return (
      <SlideWrapper>
        <Slider {...settings}>
          
        </Slider>
      </SlideWrapper>
    );
  }
}

export default SlickCarousel;
