import React from "react";
import { cardsData } from "./data";
import './style.css';
import { Stars } from "./rating.js"

const Card = ({ data }) => (
  <div className="card">
    <h3 className="card__title">{data.title}</h3>
    <img className="card__img" src={data.image} alt={data.title} />
    <p className="card__text">Oписание: {data.discription}</p>
    <p className="card__calories">Каллорийность: {data.calories}</p>
    <Stars /> 
  </div>
);


export const Menu = () => (
  <div className="food">
    {cardsData.map((card) => (
      <Card data={card} />
    ))}
  </div>
);

