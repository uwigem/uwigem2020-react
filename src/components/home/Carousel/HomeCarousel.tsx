import React from 'react';

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import s from './HomeCarousel.module.css';


const HomeCarousel = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>

        <div className={s.textContainer}>
          <div className={s.title}>
            <h1>Welcome to UW IGEM!</h1>
          </div>
          <div className={s.intro}>
            <p>Lorem ipsum</p>
          </div>
          <div className={s.more}>
            <button>Current Wiki</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCarousel;