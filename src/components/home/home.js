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
        We had a recruitmegnt info session for the 2021 season!
        <br/>
        See the recording here: Link
        <br/>
        See the slides here: <a href="https://docs.google.com/presentation/d/1bCkQujJGBAyKfE3P7g6NP8DPPTTflzFzg3rek41Q3vE/edit?usp=sharing">Link</a>
      </div>
      
      <Competition />
      <JoinUs />
      <FirstTimePopup/>
    </>
  )
}

export default HomePage;