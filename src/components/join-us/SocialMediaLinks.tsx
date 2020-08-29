import React from 'react'
import SocialMediaLink from './SocialMediaLink'

type linkInfo = {
  label: string,
  url: string,
  iconSrc: string
}

type propsType = {
  animationProgress: number, // from 0 up to and including 1
  linksList: linkInfo[]
}

const mapLinks = (linkInfo: linkInfo) => <SocialMediaLink
                                            key={linkInfo.label}
                                            label={linkInfo.label}
                                            url={linkInfo.url}
                                            iconSrc={linkInfo.iconSrc}/>

export default function SocialMediaLinks({ animationProgress, linksList }: propsType) {
  return (
    <div style={{ opacity: `${animationProgress*100}%`}}>
      {linksList.map(mapLinks)}
    </div>
  )
}