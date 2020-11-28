import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import s from './HomeCarousel.module.css';

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
          International Genetically Engineering Machine (iGEM) is the premiere international synthetic biology student research competition.
          Founded in 2008, Washington iGEM is entirely operated by a team of dedicated undergraduate students. 
          </div>
          <button><a href="https://2019.igem.org/Team:Washington">Current Wiki</a></button>
        </div>
      </div>
    </div>
  )
}

export default HomeCarousel;