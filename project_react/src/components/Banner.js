import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import styled from "styled-components";
import BannerInfoContainer from "../containers/BannerInfoContainer";
import Button from "../components/Button";

//banners will hold and display a background image of a ramdom movie from our db
//elements of the page: title, subtitle desciption, buttons to play and to save into a personal list
//a different movie is loaded everytime the page is refreshed

/********** STYLED COMPONENTS ***********/
const BannerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  align-items: flex-end;
  justify-content: left;
  padding: 1% 2%;
  background-size: cover;

  & h1,
  h2 {
    text-align: left;
  }

  @media (max-width: 800px) {
    height: 75vh;
    padding-bottom: 2%;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: left;

  & Button {
    width: 180px;
  }

  @media (max-width: 800px) {
    & Button {
      width: 100px;
      margin: 1% 2% 0 0;
    }
  }
`;

/********** FUNCTION ***********/
function Banner() {
  //add same logic code we have used to build and populate the rows
  const [movie, setMovie] = useState([]);

  //this will 'load' all movies we have for this base url - Original
  //to pick up and to display just one randomly, use math.floor(math.random) method
  /*function() { arr[Math.floor(Math.random() * arr.length)]; }*/

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);

  //avoiding long descriptions for the banner, add the truncate function
  //it will display a certain amount of characters. if execeeds, will be add ... at the end
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <BannerWrapper
      style={{
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
      )`,
        backgroundPosition: "center center",
      }}
    >
      <BannerInfoContainer>
        <h1>
          <mark>{movie?.title || movie?.name || movie?.original_name}</mark>
        </h1>
        <h2>
          <mark>{truncate(movie?.overview, 140)}</mark>
        </h2>
        <ButtonWrapper>
          <Button>PLAY</Button>
          <Button>MY LIST</Button>
        </ButtonWrapper>
      </BannerInfoContainer>
    </BannerWrapper>
  );
}

export default Banner;
