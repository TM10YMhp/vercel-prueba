import './App.css';
import Nav from '../components/Nav.jsx'
import Cards from '../components/Cards.jsx';
import React, { useState,useEffect } from 'react';
import { Route, Switch} from 'react-router-dom'
import About from '../components/About.jsx'
import Ciudad from '../components/Ciudad.jsx'

const apiKey = process.env.REACT_APP_APIKEY;

export default function App() {
  const [ciudad,setCiudad] = useState([]);
  const [user,setUser] = useState({});
  const [repos,setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/TM10YMhp')
    .then(r => r.json())
    .then(json => {
      const usuario = {
        name: json.name
      }
      console.log(json);
      setUser({...usuario});
    })
    fetch('https://api.github.com/users/TM10YMhp/repos')
    .then(r => r.json())
    .then(json => {
      const nuevo = json.find(e => e.name === 'vercel-prueba')
      console.log(json);
      setRepos(nuevo);
    })
    console.log('efecto')
  },[])
  function onClose(id){
    setCiudad(old => old.filter(c => c.id !== id))
  }

  function onFilter(id){
    return ciudad.find(c => c.id === parseInt(id))
  }

  function onSearch(input){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`)
    .then(r => r.json())
    .then(json => {
      if(json.cod === 200){
        console.log(json);
        const city = {
          id: json.id,
          name:json.name,
          min:json.main.temp_min,
          max:json.main.temp_max,
          img:json.weather[0].icon
        }
        if(ciudad.find(c => c.name === json.name)){
          return alert('no deberia haber 2 tarjetas del mismo nombre');
        }
        setCiudad(old => [...old,city]);
      }else{
        alert(`input: ${input}\ncodigo: ${json.cod}\nmensaje: ${json.message}`);
      }
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
          <About dato={user} repos={repos}/>
        </Route>
        <Route path='/ciudad/:id'>
          {({match}) => <Ciudad data={onFilter(match.params.id)} />}
        </Route>
      </Switch>
    </div>
  );
}
