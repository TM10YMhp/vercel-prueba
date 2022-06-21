import React from 'react'
import Movimiento from './Movimiento.jsx'

export default function About(props){
  return (
    <div>
      <Movimiento />
      <p>{props.dato.name}</p>
      <a href={props.repos.html_url}>codigo</a>
    </div>
  )
}
