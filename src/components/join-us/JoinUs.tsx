import React, { useState, useEffect } from 'react'
import styles from './JoinUs.module.css'
import SocialMediaLinks from './SocialMediaLinks'
import SlidingDoors from '../common-components/SlidingDoors/SlidingDoors'
import links from './linksData'


const observerOption = {
  root: null, // Uses viewport as reference for ratios
  threshold: Array.from(Array(101), (_,x) => x/100) // [0.0,0.01,0.02,...,1.0]
}

const animationProg = (viewRatio: number) => {
  // Graph this function to get a better idea of the animation
  let result = 1/(1+20*Math.exp(-15*(viewRatio - 0.42)))
  result = Math.round(result * 100) / 100 // Remove floating points after 0.01
  return result
}


export default function JoinUs() {
  const [animationProgress, setAnimationProgress] = useState(0)

  const handleRatioChange = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setAnimationProgress(entry.intersectionRatio)
      } else {
        setAnimationProgress(0)
        // if (animationProgress !== 0) {
        //   setAnimationProgress(0)
        // }
      }
    })
  }

 
  
  useEffect(() => {
    const viewportObserver = new IntersectionObserver(handleRatioChange, observerOption)
    let target = document.querySelector("#join-us section")
    if (target)
      viewportObserver.observe(target)

    return function cleanup() {
      viewportObserver.disconnect()
    }
  }, [setAnimationProgress]);
 
  return (
    <article id={"join-us"} className={styles.article}>
      <header className={styles.header}>
          <div className={styles.topBar}></div>
          <h3>Join Us</h3>
      </header>
      <section className={styles.section}>
        <SlidingDoors 
          width={"300px"}
          maxInnerSpace={"500px"}
          progress={animationProg(animationProgress)}/>
        <SocialMediaLinks 
          animationProgress={animationProg(animationProgress)}
          linksList={[links.github, links.facebook, links.placeHolder]}/>
      </section>
    </article>
  )
}