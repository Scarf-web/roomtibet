import React from "react";
import "../styles/popular.css";
import star from "../images/svgs/popular_star.svg";

export default function CardItem(props) {
  return (
    <div className="cardItem">
      <img className="cardItemBg" src={props.image} alt="img" />
      <div className="popularRaiting">
        <img src={star} alt="img" />
        <h5 className="estimation">{props.estimation}</h5>
      </div>
      <div className="cardItemInfo">
        <div className="cardItemInfoMain">
          <div className="cardItemInfoMainHeader">
            <div>
              <h3>{props.title}</h3>
              <h5>{props.subtitle}</h5>
            </div>
            <div className="cardItemPrice">
              <h4>{props.price} $</h4>
            </div>
          </div>
        </div>
        <div className="cardItemInfoText">
          <p>{props.description}</p>
          <button className="carfItemInfoButton" type="button">
            Программа тура
          </button>
        </div>
      </div>
    </div>
  );
}
