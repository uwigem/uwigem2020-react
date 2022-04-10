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
        Our last recruitment session was on 1/14/22.
        Click the links to see the <a href="https://www.youtube.com/watch?v=WS-_LD2kbUM">recording</a>!
      </div>
      
      <Competition />
      <JoinUs />
    </>
  )
}

export default HomePage;
