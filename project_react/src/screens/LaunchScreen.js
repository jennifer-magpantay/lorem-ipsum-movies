import React from "react";
import DefaultTemplate from "../templates/DefaultTemplate";
import LaunchBanner from "../components/LaunchBanner";

//this is the first screen of our app - a presentation page 

function LaunchScreen() {
  return (
    <DefaultTemplate>
      <LaunchBanner />
    </DefaultTemplate>
  );
}

export default LaunchScreen;
