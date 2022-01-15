import React from 'react';
import styles from './home.module.css';

import HomeCarousel from './Carousel/HomeCarousel';
// import Hightlights from './Highlights/Highlights';
import Competition from './competition/competition';
import JoinUs from '../join-us/JoinUs';
import FirstTimePopup from './Popup/FirstTimePopup';

const HomePage = props => {
  return (
    <>
      <HomeCarousel />
      <div className={styles.infoSession}>
        Our next recruitment session is on 1/14/22 at 6pm (Zoom ID: 673 998 2327). Check out our previous recruitment session!
        Click the links to see the <a href="https://www.youtube.com/watch?v=WS-_LD2kbUM">recording</a> and the <a href="https://docs.google.com/presentation/d/1bCkQujJGBAyKfE3P7g6NP8DPPTTflzFzg3rek41Q3vE/edit?usp=sharing">slides</a>!
      </div>
      
      <Competition />
      <JoinUs />
      <FirstTimePopup/>
    </>
  )
}

export default HomePage;
