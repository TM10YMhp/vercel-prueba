import React from 'react'

export default function About(props){
  return (
    <div>
      <p>{props.dato.name}</p>
      <a href={props.repos.html_url}>codigo</a>
    </div>
  )
}
