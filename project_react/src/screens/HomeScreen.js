import React from "react";
import DefaultTemplate from "../templates/DefaultTemplate";
import Banner from '../components/Banner';
import Row from '../components/Row';
import requests from '../requests';

function HomeScreen() {
  return (
    <DefaultTemplate>
      <Banner />
      <Row title="ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated}/>
      <Row title="TRENDING" fetchUrl={requests.fetchTrending}/>
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries}/>
      <Row title="ACTION" fetchUrl={requests.fetchActionMovies}/>
      <Row title="HORROR" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="COMEDY" fetchUrl={requests.fetchComediMovies}/>
      
    </DefaultTemplate>
  );
}

export default HomeScreen;
