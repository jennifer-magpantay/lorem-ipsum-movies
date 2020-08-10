import React from "react";
import NavBar from "../components/NavBar";
import MainContainer from "../containers/MainContainer";
import Footer from "../components/Footer";

//use this as default template for all pages
//it holds all the common components of the project
//inside Main container, add the children's content (content of the pages thar are generated from the default one)

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
