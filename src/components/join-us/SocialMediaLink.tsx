import React from 'react'
import styles from './SocialMediaLink.module.css'
interface data {
  iconSrc: string,
  url:string,
  label: string
}
export default function SocialMediaLink(props:data) {
  
  return (
    <a href={props.url} target={"_blank"} rel={"noopener noreferrer"}>
      <div className={styles.link}>
        <img src={props.iconSrc} alt={props.label} className={styles.img}/>
        <p className={styles.p}>{props.label}</p>
      </div>
    </a>
  )
}