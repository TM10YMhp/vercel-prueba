import React from 'react'

export default function Ciudad(props){
  return (
    <>
    <h3>{props.data.name}</h3>
    <p>temperatura minima: {props.data.min}</p>
    <p>temperatura maxima: {props.data.max}</p>
    <p>{props.data.img}</p>
    </>
  )
}
