import React from "react";
import NavBar from "../components/NavBar";
import MainContainer from "../containers/MainContainer";
import Footer from "../components/Footer";

//use this as default template for all pages
//it holds all the common components of the project: navbar, a main container where we will set in the content we want, and footer
//inside Main container, we will add the children's content (content of the pages thar are generated from the default one)
//then the content will be automatically loaded

function DefaultTemplate({ children }) {
  return (
    <div>
      <NavBar />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </div>
  );
}

export default DefaultTemplate;
