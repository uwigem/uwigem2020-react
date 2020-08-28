import React from 'react'
import styles from './SlidingDoors.module.css'

type propsType = {
  width: string,
  height?: string,
  maxInnerSpace: string,
  progress: number
}

export default function SlidingDoors({ width, height, maxInnerSpace, progress }: propsType) {

  const blockStyle = {
    width: `calc(${width} / 2)`,
    height: height ? height : "100%",
  }

  return (
    <div className={styles.slidingDoors}>
        <div className={`${styles.block} ${styles.flipH}`} style={blockStyle}>
          <div className={styles.topRightTri}/>  
        </div>
        <div style={{ width: `calc(${maxInnerSpace} * ${progress})`}}/>
        <div className={styles.block} style={blockStyle}>
          <div className={styles.topRightTri}/>  
        </div>
    </div>
  )
}