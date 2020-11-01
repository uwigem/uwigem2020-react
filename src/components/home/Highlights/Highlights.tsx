import React from 'react';

import s from './Highlights.module.css';

const Highlights = () => {
  return (
    <div className={s.root}>
      <div className={s.title}><h1>------ UW iGEM Team ------</h1></div>
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