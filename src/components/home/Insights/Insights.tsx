import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import s from './Insights.module.css';

const Insights = () => {

  const cards = [
    {
      imageURL: 'https://picsum.photos/id/1/200/200',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ornare pellentesque quis vivamus sit. Pulvinar penatibus sed amet a arcu scelerisque dignissim. (Diverse)'
    },
    {
      imageURL: 'https://picsum.photos/id/1/200/200',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ornare pellentesque quis vivamus sit. Pulvinar penatibus sed amet a arcu scelerisque dignissim. (Diverse)'
    },
    {
      imageURL: 'https://picsum.photos/id/1/200/200',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ornare pellentesque quis vivamus sit. Pulvinar penatibus sed amet a arcu scelerisque dignissim. (Diverse)'
    }
  ]

  return (
    <div className={s.root}>
      <div className={s.title}>
        <h1>Insights</h1>
      </div>
      <div className={s.container}>
        {cards.map(data => <Card {...data} />)}
      </div>
    </div>
  )
}

const Card = (props : {imageURL: string, text: string}) => {
  return (
    <div className={s.card}>
      <div className={s.cardContainer}>
        <div className={s.image}>
          <img src={props.imageURL} />
        </div>
        <div className={s.cardText}>
          {props.text}
        </div>
      </div>
    </div>
  )
}

export default Insights;