import React from "react";
import "./styles/MapCard.css";
import MapCard2 from "./MapCard2";
import mapCard from "./mapCard";

const showCards = (itr) => {
  return <MapCard2 key={itr.img} img={itr.img} text={itr.text} />;
};

const MapCard1 = () => {
  return (
    <div className="card-wrap">
      <div className="card">{mapCard.map(showCards)}</div>
    </div>
  );
};

export default MapCard1;
