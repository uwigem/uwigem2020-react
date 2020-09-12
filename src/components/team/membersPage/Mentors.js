import React, { useState, useEffect } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';

import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import TeamMentor from './teamMentor';

import s from './Mentors.module.css';

const Arrow = props => {
  return <div className={s.arrowRoot}>
    <FontAwesomeIcon icon={props.icon} size='2x' />
  </div>
}

const Mentors = () => {
  const [mentorData, setMentorData] = useState([]);

    useEffect(() => {
        let data = require('./team_mentors.json');
    
        // sort by name
        data.sort((a, b) => a.name.localeCompare(b.name));
        
        setMentorData(data);
        }, []);

  let mentorElems = mentorData.map(m => <TeamMentor key={m.id} person={m} />
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