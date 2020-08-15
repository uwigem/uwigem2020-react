import React from 'react';

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import s from './HomeCarousel.module.css';

const HomeCarousel = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.carouselContainer}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + '/ocean.png'}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>

        <div className={s.captionContainer}>
          <div className={s.captionLeft}>
            <div className={s.title}>
              <h1>Welcome to iGEM</h1>
            </div>
          </div>

          <div className={s.captionRight}>
            <div className={s.text}>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit cursus eleifend tincidunt tempor, mauris lobortis viverra id. Scelerisque et sit elementum in sed tincidunt at.
              </p>
            </div>
            <div className={s.wikiButton}>
              <button>
                Current Wiki
              </button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeCarousel;