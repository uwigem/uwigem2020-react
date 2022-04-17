import React from 'react'
import styles from './SocialMediaLink.module.css'
import Icon from './SocialMediaIcons'

interface data {
  iconSrc: string,
  url:string,
  label: string
}
export default function SocialMediaLink(props:data) {
  
  return (
    <a href={props.url} target={"_blank"} rel={"noopener noreferrer"}>
      <div className={styles.link}>
        <Icon icon={props.iconSrc}/>
        <p className={styles.p}>{props.label}</p>
      </div>
    </a>
  )
}