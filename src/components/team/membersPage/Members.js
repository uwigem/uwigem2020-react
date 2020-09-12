import React, { useState, useEffect } from 'react';

import s from './Members.module.css';

import TeamMember from './teamMember';

const Members = () => {
  const [memberData, setMemberData] = useState([]);
  const [allFilters, setAllFilters] = useState([
    "Drylab",
    "Wetlab",
    "Human Practices",
    "Outreach",
    "Web Development",
    "Fundraising",
    "Design",
    "Adviser",
    "PIs"
  ]);
  const [currFilters, setCurrFilters] = useState([]);

  useEffect(() => {
    let data = require('./team_members.json');

    // sort by name
    data.sort((a, b) => a.name.localeCompare(b.name));
    
    setMemberData(data);
    }, []);

  // filter management
  const selectFilter = name => {
    let newList = [...currFilters];
    let index = newList.indexOf(name);
    if (index == -1) {
      newList.push(name);
    } else {
      newList.splice(index, 1);
    }
    console.log(newList);
    setCurrFilters(newList);
  }

  const selected = name => {
    let copy = [...currFilters];
    return copy.includes(name);
  }

  
  return (
    <div className={s.root}>
      <div className={s.container}>

        <div className={s.title}>
          <h3>Team Members</h3>
        </div>

        <div className={s.filter}>
          <span>Filter:</span>
          <div className={s.filterCardContainer}>
            {
              allFilters.map(f =>
                <div
                  key={f}
                  className={selected(f)? s.filterCardSelected : s.filterCard}
                  onClick={() => selectFilter(f)}>
                  <span>{f}</span>
                </div>)
            }
          </div>
        </div>
      
        <div className={s.body}>
          {
            memberData.map(m => <TeamMember key={m.id} person={m} />)
          }
        </div>
      
      </div>
    </div>
  )
}

export default Members;