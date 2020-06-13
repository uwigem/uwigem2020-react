import React, {useState, useEffect} from 'react';
import './home.css';
import HomepageMainSection from "./MainSection/HomepageMainSection";
import Card from "./card/card";

const HomePage = props => {
  return (
    <>
      <HomepageMainSection/>
      <Card/>
    </>
  )
}

export default HomePage;