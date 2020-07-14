import React from 'react';
import './home.css';
import HomepageMainSection from "./MainSection/HomepageMainSection";
import Cards from "./card/card";
import Competition from './competition/competition';

const HomePage = props => {
  return (
    <>
      <HomepageMainSection/>
      <Cards/>
      <Competition 
        imageSrc={"/logo512.png"} 
        imageAlt={"React Logo"}
        title={"Competition"}
        subtitle={"Getting things done"}
        bodyText={"This is the body text. Maybe it has a newline here.\n Otherwise, this will appear on the same line"}
      />
    </>
  )
}

export default HomePage;