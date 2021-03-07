import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Form} from 'react-bootstrap';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import AllCases from './components/AllCases';
import Date from './components/Date';
import Countries from './components/Countries';

function App() {
  const [latest, setLatest] = useState([]);
  const [results, setResults] = useState([]);
  const [searchCountries, setSearchCountries] = useState('');

  useEffect(() => {
    axios.all([
      axios.get("https://corona.lmao.ninja/v3/covid-19/all"),
      axios.get("https://corona.lmao.ninja/v3/covid-19/countries")
    ])
    .then(responseArr => {
      setLatest(responseArr[0].data);
      setResults(responseArr[1].data);
    })
    .catch(err => console.log(err));
  }, []);

  // const addCommas = (figure) => {
  //   return figure.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // }

  const filterCountries = results.filter(item => {
    return searchCountries !== "" ? item.country.toLowerCase().includes(searchCountries) : item;   
  })

  return (
    <Container fluid="md">
      <Header head={"Covid-19 Global Statistics"} />
      <AllCases cases={latest.cases} deaths={latest.deaths} recovered={latest.recovered} />
      <Date date={latest.updated} />
      <hr />
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control 
            type="text" 
            size="sm" 
            placeholder="Search a Country" 
            onChange={e=>(setSearchCountries(e.target.value))} />
        </Form.Group>
      </Form>
      <div className="card-container">
        {filterCountries.map(data => (
          <Countries 
            key={data.country}
            flag={data.countryInfo.flag}
            country={data.country} 
            cases={data.cases}
            deaths={data.deaths}
            recovered={data.recovered}
            todayCases={data.todayCases}
            todayDeaths={data.todayDeaths}
            active={data.active}
            critical={data.critical}
            tests={data.tests}
          />
        ))}
      </div>
    </Container>
  );
}

export default App;
