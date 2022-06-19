import './Cards.css';
import React from 'react';
import Card from './Card.jsx';

export default function Cards(props) {
  return (
    <div className='cards'>
      {props.ciudad.map(c => (
        <Card
          key={c.id}
          id={c.id}
          name={c.name}
          min={c.min}
          max={c.max}
          img={c.img}
          onClose={() => props.onClose(c.id)}
        />
      ))}
    </div>
  );
}
