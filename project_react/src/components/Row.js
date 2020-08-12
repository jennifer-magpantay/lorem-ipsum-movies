import React, { useState, useEffect } from "react";
import axios from "../axios";
import styled from "styled-components";
import Youtube from "react-youtube";
import SectionLabel from "./SectionLabel";
import movieTrailer from "movie-trailer";

//it will appear as part of the HomeScreen
//each row will have a Title/Section Label, followed by a container
//this container will holds a bunch of posters of the movies of the category
//to load the content of each row, we are about to create a state with different values saved within an array

/********** STYLED COMPONENTS ***********/
const RowWrapper = styled.div`
  width: 100%;
  padding: 1% 2%;
  background-color: var(--dk-color);
  border-bottom: 1px solid var(--blue);
`;

const RowPosterWrapper = styled.div`
  display: flex;
  padding-bottom: 1%;
  overflow-y: hidden;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ImgPoster = styled.img`
  object-fit: contain;
  max-width: 250px;
  height: auto;
  margin-right: 4px;
  border-radius: 4px;
  transition: transform 450ms;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 800px) {
    max-width: 150px;
  }
`;

/********** CONST VARIABLES ***********/
const baseUrl = "https://image.tmdb.org/t/p/original/";

/********** FUNCTIONS ***********/
//create a function Row using title and the fetchUrl as parameter to display a list of movies from the TMDb (array/list of 20 movies)
//to populate that, you have to use a snippet of code which runs based on a specific condition/variables
//when the row is loaded, it will make a request to the TMDB to get the movie information we want accordgin to the fetchUrl we have assigned to  
//they will be load through a base url + their on name/path
//for that, create a const called base_url and pass it as parameter
//use and import useStatw and useEffects
//also, to play the trailers, we need to install react-youtube and movie-trailer, both by npm install command
//import youtube to your doc and add it after the posters wrapper

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");  

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //await = wait for the response
      //it will put together the base url to fetch the data + the url request
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);  
    //if brackets are blank: run once when the row loads and do not run again
    //if brackets are completed with 'movies', i.e., is gonna to run every singe time the variable changes
    //in our case, we are using fetchUrl as parameter

  console.log(movies);

  //const to open a overlay row on the screen that will display the trailer when a poster is clicked
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
    autoplay: 1,
    },
  };

  //to make the 'play' possible, we need to add an event onclick as function to the poster (ImgPoster) and then, 
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
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          //it will take the ID that is set after the 'v' and it will use this as parameter to find the correct URL to play our trailler
          //i.e: https://www.youtube.com/watch?v=pavEMY0p6KA
        })
        .catch((error) => console.log(error));
    }
  };

  //to load the visual content to our row: create a div to hold the posters and alt description of each movie from our DB/array
  return (
    <RowWrapper>
      <SectionLabel>{title}</SectionLabel>
      <RowPosterWrapper>
        {movies.map((movie) => (
          <ImgPoster
            key={movie.id}
            onClick={() => handleClick(movie)}
            src={`${baseUrl}${movie.backdrop_path}`}
            alt={movie?.title || movie?.name || movie?.original_name}
          />
        ))}
      </RowPosterWrapper>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </RowWrapper>
  );
}

export default Row;

//${movie.poster_path} //displays a vertical/portrait posters
//${movie.backdrop_path} //displays a horizontal/landscape posters
