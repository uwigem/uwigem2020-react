import React, { useState, useEffect } from 'react'
import styles from './JoinUs.module.css'
import SocialMediaLinks from './SocialMediaLinks'
import SlidingDoors from '../common-components/SlidingDoors/SlidingDoors'
import links from './linksData'


const observerOption = {
  root: null, // Uses viewport as reference for ratios
  threshold: Array.from(Array(101), (_,x) => x/100) // [0.0,0.01,0.02,...,1.0]
}


export default function JoinUs() {
  const [animationProgress, setAnimationProgress] = useState(0)

  const handleRatioChange = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setAnimationProgress(entry.intersectionRatio)
      } else {
        if (animationProgress !== 0) {
          setAnimationProgress(0)
        }
      }
    })
  }

  const viewportObserver = new IntersectionObserver(handleRatioChange, observerOption)
  
  useEffect(() => {
    let target = document.querySelector("#join-us section")
    if (target)
      viewportObserver.observe(target)

    return function cleanup() {
      viewportObserver.disconnect()
    }
  }, [viewportObserver]);
 
  return (
    <article id={"join-us"} className={styles.article}>
      <header className={styles.header}>
          <div className={styles.topBar}></div>
          <h3>Join Us</h3>
      </header>
      <section className={styles.section}>
        <SlidingDoors width={"300px"} maxInnerSpace={"500px"} progress={animationProgress}/>
        <SocialMediaLinks animationProgress={animationProgress} linksList={[links.github, links.facebook, links.placeHolder]}/>
      </section>
    </article>
  )
}