import React, {useState, useEffect} from 'react';
import './home.css';
import HomepageMainSection from "./MainSection/HomepageMainSection";
import Cards from "./card/card";

const HomePage = props => {
  return (
    <>
      <HomepageMainSection/>
      <Cards/>
    </>
  )
}

export default HomePage;