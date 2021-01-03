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
      <div className="recruit-menu-description">
        We are holding a <b>virtual information session on Saturday, January 9th, 11:00am - 12:30pm</b>. 
        This will be held on zoom, <a href="https://igem-org.zoom.us/j/98707180183?pwd=RUdDMlhYQXJHSmZSTGJLd3dLS2w3QT09">click here for link to join</a>. 
        A recording will be posted here shortly afterwards if you are unable to attend.
      </div>
      <Hightlights />
      <Competition />
      <JoinUs />
      <FirstTimePopup/>
    </>
  )
}

export default HomePage;