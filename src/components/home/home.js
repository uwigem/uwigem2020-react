import React from 'react';
import './home.css';
import HomepageMainSection from "./MainSection/HomepageMainSection";
import Cards from "./card/card";
import JoinUs from '../join-us/JoinUs';

const HomePage = props => {
  return (
    <>
      <HomepageMainSection/>
      <Cards/>
      <JoinUs />
    </>
  )
}

export default HomePage;