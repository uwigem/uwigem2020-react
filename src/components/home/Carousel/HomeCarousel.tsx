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
<<<<<<< HEAD
          International Genetically Engineered Machine (iGEM) is the premiere international synthetic biology student research competition.
          Founded in 2008, Washington iGEM is entirely operated by a team of dedicated undergraduate students. 
=======
            International Genetically Engineering Machine (iGEM) is the premiere international synthetic biology student research competition. 
            Founded in 2008, Washington iGEM is entirely operated by a team of dedicated undergraduate students.
>>>>>>> fd067706753eea0c9a76e78cf0d1d07386ffb6d2
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