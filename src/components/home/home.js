import React from 'react';
import styles from './home.module.css';

import HomeCarousel from './Carousel/HomeCarousel';
import Hightlights from './Highlights/Highlights';
import Competition from './competition/competition';
import JoinUs from '../join-us/JoinUs';
import FirstTimePopup from './Popup/FirstTimePopup';

const HomePage = props => {
  return (
    <>
      <HomeCarousel />
      <div className={styles.infoSession}>
        We are holding a <b>virtual information session on Saturday, January 9th, 11:00am - 12:30pm</b>. 
        This will be held on zoom, go to the <a href="https://www.facebook.com/events/851619972292709">Facebook event</a> and join with link in the description. 
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