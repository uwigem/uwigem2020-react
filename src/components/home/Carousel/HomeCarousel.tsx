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
              src="https://picsum.photos/id/1/2000/1000"
              alt="First slide"
            />
            <Carousel.Caption>
              <div className={s.captionContainer}>
              <div className={s.caption}>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/id/2/2000/1000"
              alt="Third slide"
            />

            <Carousel.Caption>
              <div className={s.captionContainer}>
              <div className={s.caption}>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://picsum.photos/id/3/2000/1000"
              alt="Third slide"
            />

            <Carousel.Caption>
              <div className={s.captionContainer}>
              <div className={s.caption}>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>

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