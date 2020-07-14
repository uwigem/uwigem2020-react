import React from 'react'
import SideBySideComponent from '../../common-components/SideBySideComponent/SideBySideComponent'

type CompetitionProps = {
  imageSrc: string,
  imageAlt: string,
  title: string,
  subtitle: string,
  bodyText: string
}

const layoutStyle = {
  margin: "5vh 5vw",
  padding: "5vh 5vw"
}

const textStyle = {
  padding: "5% 5%"
}

const imageContainerStyle = {
  "text-align": "center"
}

export default function Competition(props: CompetitionProps) {
  let image = <img className={"rounded img-fluid"} src={props.imageSrc} alt={props.imageAlt} />
  let text = (
    <>
      <h3>{props.title}</h3>
      <h5>{props.subtitle}</h5>
      <p>{props.bodyText}</p>
    </>
  )

  return (
    <SideBySideComponent
      leftChild={image}
      rightChild={text}
      classNames={"container-fluid"}
      style={layoutStyle}
      leftStyle={imageContainerStyle}
      rightStyle={textStyle}/>
  )
}