import React, { useState, useEffect } from 'react';

import s from './Mentors.module.css';

import TeamMentor from './teamMentor.js';

const Mentors = () => {
    const [mentorData, setMentorData] = useState([]);

    useEffect(() => {
        let data = require('./team_mentors.json');
    
        // sort by name
        data.sort((a, b) => a.name.localeCompare(b.name));
        
        setMentorData(data);
        }, []);

  return (
    <div className={s.root}>
      <div className={s.container}>

      <div className={s.title}>
        <h3>
          Mentors
        </h3>
      </div>

      <div className={s.list}>
          {
            mentorData.map(m => <TeamMentor key={m.id} person={m} />)
          }
      </div>
      
      </div>
    </div>
  )
}

export default Mentors;