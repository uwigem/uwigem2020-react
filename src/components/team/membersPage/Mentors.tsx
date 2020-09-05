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

      <div className={s.title}>
        <h2>
          Mentors
        </h2>
      </div>

      <div className={s.list}>
      
      {
        mentors.map((m, i) => 
          <div key={i} className={s.card}>
            <div className={s.photo}>

            </div>
            <div className={s.name}>
              
            </div>
            <div className={s.desc}>
              
            </div>
          </div>  
        )
      }

      </div>
      
      </div>
    </div>
  )
}

export default Mentors;