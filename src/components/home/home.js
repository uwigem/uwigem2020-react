import React from 'react';
import './home.css';
import HomepageMainSection from "./MainSection/HomepageMainSection";
import Cards from "./card/card";
import HomeCarousel from './Carousel/HomeCarousel';
import Insights from './Insights/Insights';

const HomePage = props => {
  return (
    <>
      <HomeCarousel />
      <Insights />
      <HomepageMainSection/>
      <Cards/>
    </>
  )
}

export default HomePage;