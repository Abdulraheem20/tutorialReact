import React from "react";

const MapCard2 = (props) => {
  return (
    <div>
      <div className="single-card">
        <div className="card-img">
          <img src={props.img} alt="img" />
        </div>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default MapCard2;
