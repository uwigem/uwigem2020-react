import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import s from './Mentors.module.css';

const Arrow = props => {
  return <div className={s.arrowRoot}>
    <FontAwesomeIcon icon={props.icon} size='2x' />
  </div>
}

const Mentors = () => {
  
  const mentors = [
    {
      photo: 'url',
      name: '',
      description: 'hello'
    },
    {
      photo: 'url',
      name: '',
      description: 'hello'
    },
    {
      photo: 'url',
      name: '',
      description: 'hello'
    },
    {
      photo: 'url',
      name: '',
      description: 'hello'
    },
    {
      photo: 'url',
      name: '',
      description: 'hello'
    },
    {
      photo: 'url',
      name: '',
      description: 'hello'
    },
    {
      photo: 'url',
      name: '',
      description: 'hello'
    }
  ];

  let mentorElems = mentors.map((m, i) => 
    <div key={i} className={s.card}>
      <div className={s.photo}>

      </div>
      <div className={s.name}>
        
      </div>
      <div className={s.desc}>
        
      </div>
    </div>  
  )

  return (
    <div className={s.root}>
      <div className={s.container}>

      <div className={s.title}>
        <h2>
          Mentors
        </h2>
      </div>

      <div className={s.list}>

      <ScrollMenu
        data={mentorElems}
        itemsCount={mentorElems.length}
        arrowLeft={<Arrow icon={faArrowLeft} />}
        arrowRight={<Arrow icon={faArrowRight} />}
        alignCenter={true}
        wheel={true}
        allowOuterScroll={true} />

      </div>

      </div>
    </div>
  )
}

export default Mentors;