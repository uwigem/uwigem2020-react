import React from 'react';

import s from './Highlights.module.css';

const Highlights = () => {
  return (
    <div className={s.root}>
    <div className={s.container}>

      <div className={s.title}>
        <h1>Hightlights</h1>
      </div>

      <div className={s.main}>
        <div className={s.left}></div>

        <div className={s.mid}>
          <div className={s.project}>
            <div className={s.year}>
              <h3>2013</h3>
            </div>
            <div className={s.name}>
              <h2>Project Name</h2>
            </div>
            <div className={s.desc}>
              <p>
                Best Public Relation Gold Medal Project
              </p>
            </div>
          </div>
          <div className={s.project}>

          </div>
        </div>

        <div className={s.right}></div>
      </div>

    </div>
    </div>
  );
}

export default Highlights;