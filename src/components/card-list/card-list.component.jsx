import React from "react";

import { Card } from "../card/card.component";

import "./card-list.style.css";

// out this functional component
// props is parameter get from component

// to make cardless component
export const CardList = props => (
  <div className="card-list">
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} /> 
    ))}
  </div>
);

//   return <div className="card-list">{props.children}</div>;
//   return <div>Hey</div>;
