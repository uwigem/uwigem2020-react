import React from 'react';

import s from './Highlights.module.css';

const Highlights = () => {
  return (
    <div className={s.root}>
      
      <div className={s.title}><div className={s.hr}></div><h1>UW iGEM Team</h1><div className={s.hr}></div></div>

      <div className={s.intro}>
        Our team dedicates to apply syntethc biology to solve real problems and to understand the concept
      </div>

      <div className={s.main}>
        <div className={s.left}>

        </div>
        <div className={s.center}>
          <ProjectCard />
        </div>
        <div className={s.right}>
          
        </div>
      </div>
    </div>
  );
}

export default Highlights;

const ProjectCard = () => {
  return (
    <div className={s.card}>
      <div className={s.year}>2013</div>
      <div className={s.projectTitle}>Project Name</div>
      <div className={s.prize}><span>Best Public Relations</span><br/><span>Gold Medal Prject</span></div>
    </div>
  )
}