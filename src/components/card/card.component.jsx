import React from "react";

import "./card.style.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set=set2&size=150x150`} />
    <h2> {props.monster.name} </h2>
  </div>
);
