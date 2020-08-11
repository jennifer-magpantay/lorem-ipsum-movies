import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import styled from "styled-components";
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
  justify-content: center;
  padding: 1% 2%;
  background-size: cover;

  @media (max-width: 800px) {
    height: 50vh;
  }
`;

const BannerInfoContainer = styled.div`
  width: 60%;
  text-align: center;

  & h1 {
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  & h2 {
    font-weight: normal;
  }
 `;

const Form = styled.form`
  display: flex;
  width: 90%; 
  margin: auto;

  & input {
    margin-right: 1%;
  }
  
  @media (max-width: 800px) {
    flex-wrap: wrap;
    & input {
    margin-bottom: 1%;
    font-size: 12px;
  }
    
    & Button {
      width: auto;
      margin:auto;
    }
  }

  
`;

/********** FUNCTION ***********/
function LaunchBanner() {
  //add same logic code we have used to build and populate the rows
  const [movie, setMovie] = useState([]);

  //this will 'load' all movies we have for this base url - Original
  //to pick up and to display just one randomly, use math.floor(math.random) method
  /*function() { 
  * arr[Math.floor(Math.random() * arr.length)];
    }*/

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
          <mark>Get full access within just one click</mark>
        </h1>
        <h2>
          <mark>Ready? Enjoy your movie and relax in your favorite chair</mark>
        </h2>
        <Form>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Add your email"
          />
          <Button>GET STARTED</Button>
        </Form>
      </BannerInfoContainer>
    </BannerWrapper>
  );
}

export default LaunchBanner;
