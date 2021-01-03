import React from 'react';
import './home.css';

import HomeCarousel from './Carousel/HomeCarousel';
import Hightlights from './Highlights/Highlights';
import Competition from './competition/competition';
import JoinUs from '../join-us/JoinUs';
import FirstTimePopup from './Popup/FirstTimePopup';

const HomePage = props => {
  return (
    <>
      <HomeCarousel />
      <Hightlights />
      <Competition />
      <JoinUs />
      <FirstTimePopup/>
    </>
  )
}

export default HomePage;