import React from 'react';

import s from './Button.module.css';

/**
 * Props:
 *  - text : string, required
 *  - link : string, required
 *  - purple : boolean, default = false / white
 */

const Button = props => {
  
  return (
    <div
      className={s.root}
      style={{
        backgroundColor: props.purple ? '#4B2E83' : 'white'
      }}>
      <a
        href={props.link}
        style={{
          color: props.purple ? 'white' : '#4B2E83'
        }}>
        {props.text}
      </a>
    </div>
  )
}

export default Button;