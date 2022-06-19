import './Card.css';
import React from 'react';
import {Link} from 'react-router-dom'

export default function Card (props) {
    return (
      <div className="card">
        <div id="closeIcon" className="row">
          <button onClick={props.onClose}>x</button>
        </div>
        <div className="card-body">
          <Link to={`/ciudad/${props.id}`}>
            <h5 className="card-title">{props.name}</h5>
          </Link>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>min</p>
              <p>{props.min}</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>max</p>
              <p>{props.max}</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"https://openweathermap.org/img/wn/"+props.img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};
