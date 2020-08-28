import React from 'react'
import styles from './SlidingDoors.module.css'

type propsType = {
  width: string,
  height?: string,
  maxInnerSpace: string,
  progress: number
}

const computeAnimationProgress = (viewRatio: number) => {
  // Graph this function to get a better idea of the animation
  let result = 1/(1+20*Math.exp(-15*(viewRatio - 0.42)))
  result = Math.round(result * 100) / 100 // Remove floating points after 0.01
  return result
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
        <div style={{ width: `calc(${maxInnerSpace} * ${computeAnimationProgress(progress)})`}}/>
        <div className={styles.block} style={blockStyle}>
          <div className={styles.topRightTri}/>  
        </div>
    </div>
  )
}