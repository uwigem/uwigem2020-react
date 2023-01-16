import React from 'react';
import styles from './home.module.css';

import HomeCarousel from './Carousel/HomeCarousel';
// import Hightlights from './Highlights/Highlights';
import Competition from './competition/competition';
import JoinUs from '../join-us/JoinUs';

const HomePage = props => {
  return (
    <>
      <HomeCarousel />
      <div className={styles.infoSession}>
        Check out our info session on 1/23/2023, 4:30pm @ HUB 332. Click the link to see our previous session <a href="https://www.youtube.com/watch?v=WS-_LD2kbUM">recording</a>!
The application for iGEM is due on 1/27/23. Apply below!
      </div>
      
      <Competition />
      <JoinUs />
    </>
  )
}

export default HomePage;
