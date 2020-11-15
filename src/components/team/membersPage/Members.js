import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Paper } from '@material-ui/core';
import fadeStyle from './fadeStyle.module.css'

import s from './Members.module.css';

import TeamMember from './teamMember';

const Members = () => {
  const [memberData, setMemberData] = useState([]);
  const [allFilters] = useState([
    "Advisor",
    "Design",
    "Drylab",
    "Fundraising",
    "Human Practices",
    "Outreach",
    "Web Development",
    "Wetlab"
  ]);
  
  const [currFilter, setCurrFilter] = useState("All");

  useEffect(() => {
    let data = require('./team_members.json');

    // sort by name
    data.sort((a, b) => a.name.localeCompare(b.name));
    
    setMemberData(data);
    }, []);

  // filter management
  const selectFilter = name => {
    if (currFilter === name) {
      setCurrFilter("All");
    } else {
      setCurrFilter(name);
    }
  }
  
  return (
    <div className={s.root}>
      <div className={s.container}>

        <div className={s.title}>
          <h3>Team Members</h3>
        </div>

        <div className={s.filter}>
          <span className={s.filterHeading}>Filter:</span>
          <div className={s.filterCardContainer}>
            {
              allFilters.map(f =>
                <div
                  key={f}
                  className={currFilter === f? s.filterCardSelected : s.filterCard}
                  onClick={() => selectFilter(f)}>
                  <span>{f}</span>
                </div>)
            }
          </div>
        </div>
      
        <div className={s.listContainer}>
        <Paper elevation={5}>
        
          <TransitionGroup className={s.list} component={"div"}>
            {
              memberData.map(m => m.teams.indexOf(currFilter) > -1? 
                <CSSTransition key={m.id} timeout={500} classNames={{ ...fadeStyle }}>
                  <TeamMember person={m} /> 
                </CSSTransition>
                : 
                null)
            }
          </TransitionGroup>

        </Paper>
        </div>
      
      </div>
    </div>
  )
}

export default Members;