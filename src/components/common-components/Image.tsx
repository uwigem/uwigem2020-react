import React from 'react'
import BootImage, { ImageProps } from 'react-bootstrap/Image'
import packageJson from '../../../package.json'

const packageObj: any = packageJson
type propsType = ImageProps & { local?: boolean }

export default function Image(props: propsType) {
  let newProps
  if (!props.local || !packageObj.homepage) {
    newProps = props
  } else {
    newProps = {
      ...props,
      src: packageObj.homepage + props.src
    }
  }

  newProps.local = undefined
  
  return (
    <BootImage {...newProps} />
  )
}