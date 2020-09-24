import React, { useState, useEffect } from 'react';

import { Paper } from '@material-ui/core';

import s from './Members.module.css';

import TeamMember from './teamMember';

const Members = () => {
  const [memberData, setMemberData] = useState([]);
  const [allFilters, setAllFilters] = useState([
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
                  className={currFilter == f? s.filterCardSelected : s.filterCard}
                  onClick={() => selectFilter(f)}>
                  <span>{f}</span>
                </div>)
            }
          </div>
        </div>
      
        <div className={s.listContainer}>
        <Paper elevation={5}>
        
          <div className={s.list}>
            {
              memberData.map(m => m.teams.indexOf(currFilter) > -1? <TeamMember key={m.id} person={m} /> : null)
            }
          </div>

        </Paper>
        </div>
      
      </div>
    </div>
  )
}

export default Members;