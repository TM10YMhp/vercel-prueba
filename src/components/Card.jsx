import './Card.css';

export default function Card () {
    return (
      <div className="card">
        <div id="closeIcon" className="row">
        </div>
        <div className="card-body">
          <h5 className="card-title">{}</h5>
          <div className="row">
            <div className="col-sm-4 col-md-4 col-lg-4">
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};
