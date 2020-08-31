import React from 'react';

import s from './Mentors.module.css';

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
    }
  ];

  return (
    <div className={s.root}>
      <div className={s.container}>
      
      {
        mentors.map(m => 
          <div className={s.card}>
            <div className={s.photo}>

            </div>
            <div className={s.name}>
              {m.name}
            </div>
            <div className={s.desc}>
              {m.description}
            </div>
          </div>  
        )
      }
      
      </div>
    </div>
  )
}

export default Mentors;