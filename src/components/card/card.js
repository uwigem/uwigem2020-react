import React, {useState, useEffect} from 'react';
import './card.css';

const Card = props => {
  return (
   <div className = 'container'>
      <div className = 'row'>
        <div className = 'column'>
            <div className = 'content'>
              <h3>Title 1</h3>
              <h5 className = 'date'> January 1, 2019</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna turpis, consectetur at justo pulvinar...</p>
            </div>
        </div>
        <div className = 'column'>
            <div className = 'content'>
              <h3> Title 2</h3>
              <h5 className = 'date'> January 1, 2019</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna turpis, consectetur at justo pulvinar...</p>
            </div>
        </div>
      </div>
   </div>
  )
}

export default Card;