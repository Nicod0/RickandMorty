import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={style.container}>
      <button
        onClick={() => {
          props.onClose(props.id);
        }}
      >
        X
      </button>
      <Link to={`/detail/${props.id}`}>
        <h2>Name:{props.name}</h2>
      </Link>
      <p>Specie: {props.species}</p>
      <p>Gender: {props.gender}</p>
      <img src={props.image} alt="" />
    </div>
  );
}
