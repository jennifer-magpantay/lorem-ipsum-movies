import React, { useState, useEffect } from "react";
import axios from "../axios";
import styled from "styled-components";
import SectionLabel from "./SectionLabel";

//it will appear as part of the HomeScreen
//each row will have a Title/Section Label, followed by a container
//this container will holds a bunch of posters of the movies of the category
//to load the content of each row, we are about to create a state with different values saved within an array

/********** STYLED COMPONENTS ***********/
const RowWrapper = styled.div`
  width: 100vw;
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
  margin: 1px;
  transition: transform 450ms;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width:800px){
    max-width: 150px;
  }
`;

/********** CONST VARIABLES ***********/
const baseUrl = "https://image.tmdb.org/t/p/original/";

/********** FUNCTIONS ***********/
//create a function Row using title and the fetchUrl as parameter
function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  //to populate that, you have to use a snippet of code which runs based on a specific condition/variables
  //when the row is loaded, it will make a request to the TMDB to get the movie information we want accordgin to the fetchUrl we have assigned to
  //use and import useEffects

  useEffect(() => {
    //if brackets are blank: run once when the row loads and do not run again
    //if brackets are completed with 'movies', i.e., is gonna to run every singe time the variable changes

    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //await = wait for the response
      //it will put together the base url to fetch the data + the url request
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  //to load the visual content to our row: create a div to hold the posters and alt description of each movie from our DB/array
  //they will be load through a base url + their on name/path
  //for that, create a const called base_url and pass it as parameter

  return (
    <RowWrapper>
      <SectionLabel>{title}</SectionLabel>
      <RowPosterWrapper>
        {movies.map((movie) => (
          <ImgPoster 
          key={movie.id}
          src={`${baseUrl}${movie.backdrop_path}`} 
          alt={movie.name} />
        ))}
      </RowPosterWrapper>
    </RowWrapper>
  );
}

export default Row;

//${movie.poster_path} //displays a vertical/portrait posters
//${movie.backdrop_path} //displays a horizontal/landscape posters
