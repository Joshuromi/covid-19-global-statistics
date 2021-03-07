import React from 'react';
import {Card, CardDeck} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AllCases = (props) => {

    return (
      <CardDeck className="card-container">
        <Card bg="light" border="secondary" className="card">
          <Card.Header>Cases</Card.Header>
          <Card.Body>
            <Card.Title><strong>{props.cases}</strong></Card.Title>
          </Card.Body>
        </Card>
        <Card bg="light" border="danger" text="danger" className="card">
          <Card.Header>Deaths</Card.Header>
          <Card.Body>
            <Card.Title><strong>{props.deaths}</strong></Card.Title>
          </Card.Body>
        </Card>
        <Card bg="light" border="success" text="success" className="card">
          <Card.Header>Recovered</Card.Header>
          <Card.Body>
            <Card.Title><strong>{props.recovered}</strong></Card.Title>
          </Card.Body>
        </Card>
      </CardDeck>
    )
}

export default AllCases;