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
      <Competition />
    </>
  )
}

export default HomePage;