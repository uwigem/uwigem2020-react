import React, { useState } from 'react'
import styles from './JoinUs.module.css'
import SocialMediaLink from './SocialMediaLink'

const baseLeftClasses = `${styles.block} ${styles.leftBlock}`
const baseRightClasses = `${styles.block} ${styles.rightBlock}`

const github = {
  label: "Github",
  url: "https://github.com/uwigem",
  iconSrc: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
}

const facebook = {
  label: "Facebook",
  url: "https://www.facebook.com/WashingtoniGEM",
  iconSrc: "https://image.flaticon.com/icons/svg/124/124010.svg"
}

const placeHolder = {
  label: "Placeholder",
  url: "https://github.com/uwigem",
  iconSrc: "https://avatars2.githubusercontent.com/u/22042397?s=200&v=4"
}

export default function JoinUs() {
  const [isOpen , setOpen] = useState(2)
  const [isAnimating, setIsAnimating] = useState(false)

  let handleClick = () => {
    if (isAnimating) return
    if (isOpen === 1) {
      setOpen(0)
    } else {
      setOpen(1)
    }
  }

  const leftBlockClasses = () => {
    if (isOpen === 0) {
      return `${baseLeftClasses} ${styles.leftSlideBack}`
    } else if (isOpen === 1) {
      return `${baseLeftClasses} ${styles.leftSlide}`
    } else {
      return baseLeftClasses
    }
  } 

  const rightBlockClasses = () => {
    if (isOpen === 0) {
      return `${baseRightClasses} ${styles.rightSlideBack}`
    } else if (isOpen === 1) {
      return `${baseRightClasses} ${styles.rightSlide}`
    } else {
      return baseRightClasses
    }
  }

  const linksClasses = () => {
    if (isOpen === 0) {
      return `${styles.links} ${styles.fadeOut}`
    } else if (isOpen === 1) {
      return `${styles.links} ${styles.fadeIn}`
    } else {
      return styles.links
    }
  }
 
  return (
    <article className={styles.article}>
      <header className={styles.header}>
          <div className={styles.topBar}></div>
          <h3>Join Us</h3>
      </header>
      <section className={styles.section}>
        <div
          className={leftBlockClasses()}
          key={isOpen ? "left-open" : "left-closed"}
          onClick={handleClick}
        >
          <div className={`${styles.topRightTri} ${styles.flipH}`}/>  
        </div>
        <div
          className={linksClasses()}
          key={isOpen === 1 ? "links-open" : "links-closed"}
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationEnd={() => setIsAnimating(false)}
        >
          <SocialMediaLink label={github.label} url={github.url} iconSrc={github.iconSrc}/>
          <SocialMediaLink label={facebook.label} url={facebook.url} iconSrc={facebook.iconSrc}/>
          <SocialMediaLink label={placeHolder.label} url={placeHolder.url} iconSrc={placeHolder.iconSrc}/>
        </div>
        <div
          className={rightBlockClasses()}
          key={isOpen ? "right-open" : "right-closed"}
          onClick={handleClick}
        >
          <div className={styles.topRightTri}/>  
        </div>
      </section>
    </article>
  )
}