import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './card.css';

const Cards = () => {
  return (
   <Grid className = 'announcements' fliud>
      <Row lg={12}>
        <Col xs>
          <Card title="Title 1" date="January 1, 2019"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna turpis, consectetur at justo pulvinar..."></Card>
        </Col>
        <Col xs>
          <Card title="Title 2" date="January 1, 2019"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras magna turpis, consectetur at justo pulvinar..."></Card>
        </Col>
      </Row>
   </Grid>
  )
}

const Card = props => {
  return (
    <div className = 'card'>
      <h3>{props.title}</h3>
      <h5 className = 'date'>{props.date}</h5>
      <p>{props.content}</p>
    </div>
  )
}

export default Cards;