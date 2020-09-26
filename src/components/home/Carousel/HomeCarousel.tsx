import React from 'react';

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import s from './HomeCarousel.module.css';
import { faEnvira } from '@fortawesome/free-brands-svg-icons';


const HomeCarousel = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.left}>
          <div>
            Welcome To UW iGEM
          </div>
        </div>
        <div className={s.right}>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit cursus eleifend tincidunt tempor, mauris lobortis viverra id. Scelerisque et sit elementum in sed tincidunt at.
          </div>
          <button>Current Wiki</button>
        </div>
      </div>
    </div>
  )
}

export default HomeCarousel;