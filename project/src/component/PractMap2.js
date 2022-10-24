import React from "react";

const PractMap2 = (props) => {
  return (
    <div>
      <div className="single-card">
        <div className="card-img">
          <img src={props.img} alt="Image" />
        </div>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default PractMap2;
