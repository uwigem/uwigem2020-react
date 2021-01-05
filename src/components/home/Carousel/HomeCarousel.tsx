import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from '../../common-components/Button/Button';

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
            International Genetically Engineered Machine (iGEM) is the premiere international synthetic biology student research competition. 
            Founded in 2008, Washington iGEM is entirely operated by a team of dedicated undergraduate students.
          </div>
          <Button
            text='Current Wiki'
            link='https://2019.igem.org/Team:Washington' />
        </div>
      </div>
    </div>
  )
}

export default HomeCarousel;