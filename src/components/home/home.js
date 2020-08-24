import React from 'react';
import './home.css';

import HomeCarousel from './Carousel/HomeCarousel';
import Competition from './competition/competition';
import JoinUs from '../join-us/JoinUs';

const HomePage = props => {
  return (
    <>
      <HomeCarousel />
      <Competition />
      <JoinUs />
    </>
  )
}

export default HomePage;