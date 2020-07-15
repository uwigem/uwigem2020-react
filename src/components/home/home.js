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
        linkLocation={"/about"}
        bodyText={"Lorem ipsum dolor sit amet, consectetur adipiscing \
         elit. Scelerisque non nulla varius a egestas arcu. Fames aliquam nullam cum risus arcu, in malesuada gravida tincidunt. Mi ut dignissim fringilla in sit morbi. Congue nunc, laoreet quis aliquam eu tincidunt libero. Eget et ullamcorper pretium."}
      />
    </>
  )
}

export default HomePage;