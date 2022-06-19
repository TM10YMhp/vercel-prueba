import './App.css';
import Nav from '../components/Nav.jsx'
import Card from '../components/Card.jsx';
import Cards from '../components/Cards.jsx';
import React, { useState } from 'react';
import { Route, Switch} from 'react-router-dom'
import About from '../components/About.jsx'
import Ciudad from '../components/Ciudad.jsx'

//const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
const apiKey = 'f9b114846a7fd15c105bb18be0aa2ec6';

export default function App() {
  const [ciudad,setCiudad] = useState([]);

  function onClose(id){
    setCiudad(old => old.filter(c => c.id !== id))
  }

  function onFilter(id){
    return ciudad.find(c => c.id === parseInt(id))
  }

  function onSearch(input){
    console.log(input);
    //Llamado a la API del clima
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`)
      .then(r => r.json())
      .then(json => {
        console.log(json)
        const city = {
          id: json.id,
          name:json.name,
          min:json.main.temp_min,
          max:json.main.temp_max,
          img:json.weather[0].icon
        }
        setCiudad(old => [...old,city]);
      })
  }
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Switch>
        <Route exact path='/'>
          <Cards ciudad={ciudad} onClose={onClose}/>
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/ciudad/:id'>
          {({match}) => <Ciudad data={onFilter(match.params.id)} />}
        </Route>
      </Switch>
    </div>
  );
}
