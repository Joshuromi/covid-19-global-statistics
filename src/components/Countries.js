import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Countries = (props) => {
    const [toggle, setToggle] = useState(false);

    return (
        <Card bg="light" text="dark" className="card">
        <Card.Img variant="top" src={props.flag} style={{height: "150px"}}/>
        <Card.Body>
          <Card.Title>{props.country}</Card.Title>
          <Card.Text>Cases: {props.cases}</Card.Text>
          <Card.Text>Deaths: {props.deaths}</Card.Text>
          <Card.Text>Recovered: {props.recovered}</Card.Text>
          {
            toggle === true ?
              <> 
                <Card.Text>Today's cases: {props.todayCases}</Card.Text>
                <Card.Text>Today's deaths: {props.todayDeaths}</Card.Text>
                <Card.Text>Active cases: {props.active}</Card.Text>
                <Card.Text>Critical cases: {props.critical}</Card.Text>
                <Card.Text>Tests: {props.tests}</Card.Text>
              </>
            : null 
          }
          <Button variant="outline-dark" size="sm" onClick={()=>setToggle(!toggle)}>
            {
              toggle === false ? "Show more" : "Show less"
            }
          </Button>
        </Card.Body>
      </Card>
    )
}

export default Countries;