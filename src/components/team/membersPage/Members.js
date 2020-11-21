import React, { useState, useEffect, useRef } from 'react';
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
  const containerRef = useRef()
  
  const [currFilter, setCurrFilter] = useState("All");

  useEffect(() => {
    let data = require('./team_members.json');

    // sort by name
    data.sort((a, b) => a.name.localeCompare(b.name));
    setMemberData(data);

    const parts = 5
    const observerOptions = {
      threshold: Array(parts + 1).fill().map((_, i) => i / parts)
    }
    const observer = new IntersectionObserver(observerCallback, observerOptions)
    observer.observe(containerRef.current)
    return observer.disconnect
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
        <Paper elevation={5} ref={containerRef} className={"d-flex"}>
        
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

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    const target = entry.target
    const ratio = entry.intersectionRatio
    const rect = entry.intersectionRect
    console.log(rect.height);
    target.style["min-height"] = `${rect.height}px`
    // console.log(target.clientHeight, target.style["min-height"]);
  })
}