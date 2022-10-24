import React from "react";
import PractMap2 from "./PractMap2";
import Data from "./practMap";
import "./styles/MapCard.css";

const display = (map) => {
  return <PractMap2 key={map.img} img={map.img} text={map.text} />;
};

const PractMap1 = () => {
  return (
    <div>
      <div className="card-wrap">
        <div className="card">{Data.map(display)}</div>
      </div>
    </div>
  );
};

export default PractMap1;
