import React from 'react';
import './home.css';
import Competition from './competition/competition';
import JoinUs from '../join-us/JoinUs';

const HomePage = props => {
  return (
    <>
      <Competition />
      <JoinUs />
    </>
  )
}

export default HomePage;