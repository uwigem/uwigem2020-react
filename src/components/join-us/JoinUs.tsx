import React, { useState } from 'react'
import styles from './JoinUs.module.css'
import SocialMediaLink from './SocialMediaLink'

const baseLeftClasses = `${styles.block} ${styles.leftBlock}`
const baseRightClasses = `${styles.block} ${styles.rightBlock}`

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
        <SocialMediaLink label={"Github"} url={"https://github.com/uwigem"} iconSrc={"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"}/>
        <SocialMediaLink label={"Facebook"} url={"https://www.facebook.com/WashingtoniGEM"} iconSrc={"https://image.flaticon.com/icons/svg/124/124010.svg"}/>
        <SocialMediaLink label={"Github"} url={"https://github.com/uwigem"} iconSrc={"https://avatars2.githubusercontent.com/u/22042397?s=200&v=4"}/>
        <SocialMediaLink label={"Github"} url={"https://github.com/uwigem"} iconSrc={"https://avatars2.githubusercontent.com/u/22042397?s=200&v=4"}/>
      </div>
      <div
        className={rightBlockClasses()}
        key={isOpen ? "right-open" : "right-closed"}
        onClick={handleClick}
      >
        <div className={styles.topRightTri}/>  
      </div>
    </article>
  )
}