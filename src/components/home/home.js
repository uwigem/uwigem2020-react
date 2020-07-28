import React from 'react';
import './home.css';
import HomepageMainSection from "./MainSection/HomepageMainSection";
import Cards from "./card/card";
import HomeCarousel from './Carousel/HomeCarousel';

const HomePage = props => {
  return (
    <>
      <HomeCarousel />
      <HomepageMainSection/>
      <Cards/>
    </>
  )
}

export default HomePage;