import React from 'react'
import Movimiento from './Movimiento.jsx'

export default function Ciudad(props){
  return (
    <>
    <Movimiento />
    <h3>{props.data.name}</h3>
    <p>temperatura: {props.data.temp}°</p>
    <p>humedad: {props.data.humedad}</p>
    <p>presion: {props.data.presion}</p>
    <img src={`https://openweathermap.org/img/wn/${props.data.img}@2x.png`} alt=''/>
    <p>imagen: {props.data.img}</p>
    </>
  )
}
