import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import styled from "styled-components";
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";
import BannerInfoContainer from "../containers/BannerInfoContainer";
import Button from "./Button";

//banners will hold and display a background image of a ramdom movie from our db
//elements of the page: title, subtitle desciption, buttons to play and to save into a personal list
//a different movie is loaded everytime the page is refreshed

const BannerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 95vh;
  align-items: flex-end;
  justify-content: left;
  padding: 100px 2% 1% 2%;
  background-size: cover;

  & h1 {
    font-size: 1.5em;
    text-align: left;
  }

  & h2 {
    width: 60%;
    font-size: 1.25em;
    font-weight: normal;
    text-align: left;
  }

  @media (max-width: 800px) {
    height: 95vh;
    padding-bottom: 2%;

    & h1 {
      font-size: 1.25em;
      text-align: left;
    }

    & h2 {
      width: 85%;
      font-size: 1.15em;
      text-align: left;
    }
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

const Frame = styled.div`
  width: 50%;
  height: 0;
  position: relative;
  padding-bottom: 25%;

  & iframe {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  @media (max-width: 800px) {
    width: 100%;
    height: 100%;
    padding-bottom: 60%;

    & iframe {
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }
`;

/********** CONST VARIABLES ***********/
//const baseUrl = "https://image.tmdb.org/t/p/original/";

function Banner() {
  //add same logic code we have used to build and populate the rows
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

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

  //const to open a overlay row on the screen that will display the trailer when a poster is clicked
  const banner_opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  //add the handleClick const to treat the event
  const handleClick = (movie) => {
    //so, when the image poster is clicked:
    //if the trailer url is already set, then set the trailer URL as 'empty' to close it
    if (trailerUrl) {
      setTrailerUrl("");
    }
    //else - if there is nothing set -, then try to find to trailer by its name or by its own ID
    //to garantee the searching, I am using the title, name or original name
    //if none one them are available, then, it will search for the ID/url
    else {
      //so, when the image poster is clicked:
      movieTrailer(movie?.title || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          //it will take the ID that is set after the 'v' and it will use this as parameter to find the correct URL to play our trailler
          //i.e: https://www.youtube.com/watch?v=pavEMY0p6KA
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <BannerWrapper
      alt={movie?.title || movie?.name || movie?.original_name}
      style={{
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
      )`,
        backgroundPosition: "center center",
      }}
    >
      <BannerInfoContainer>
        <Frame>
          {trailerUrl && (
            <Youtube videoId={trailerUrl} banner_opts={banner_opts} />
          )}
        </Frame>
        <h1>
          <mark>{movie?.title || movie?.name || movie?.original_name}</mark>
        </h1>
        <h2>
          <mark>{truncate(movie?.overview, 130)}</mark>
        </h2>
        <ButtonWrapper>
          <Button onClick={() => handleClick(movie)}>PLAY</Button>
          <Button>MY LIST</Button>
        </ButtonWrapper>
      </BannerInfoContainer>
    </BannerWrapper>
  );
}

export default Banner;
