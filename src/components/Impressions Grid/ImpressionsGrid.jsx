import React from "react";
import magnifier from "../../images/svgs/impressions_magnifier.svg";

export default function ImpressionsGrid(props) {
  return (
    <div className="impressionsGridContainer">
      <div className="impressionsGridCard" style={{ gridArea: "first" }}>
        <img className="impressionsGirdImage" src={props.image_1} alt="img" />
        <img className="imressionsMagnifier" src={magnifier} alt="img" />
      </div>
      <div className="impressionsGridCard" style={{ gridArea: "two" }}>
        <img className="impressionsGirdImage" src={props.image_2} alt="img" />
        <img className="imressionsMagnifier" src={magnifier} alt="img" />
      </div>
      <div className="impressionsGridCard" style={{ gridArea: "three" }}>
        <img className="impressionsGirdImage" src={props.image_3} alt="img" />
        <img className="imressionsMagnifier" src={magnifier} alt="img" />
      </div>
      <div className="impressionsGridCard" style={{ gridArea: "four" }}>
        <img className="impressionsGirdImage" src={props.image_4} alt="img" />
        <img className="imressionsMagnifier" src={magnifier} alt="img" />
      </div>
      <div className="impressionsGridCard" style={{ gridArea: "five" }}>
        <img className="impressionsGirdImage" src={props.image_5} alt="img" />
        <img className="imressionsMagnifier" src={magnifier} alt="img" />
      </div>
      <div className="impressionsGridCard" style={{ gridArea: "six" }}>
        <img className="impressionsGirdImage" src={props.image_6} alt="img" />
        <img className="imressionsMagnifier" src={magnifier} alt="img" />
      </div>
    </div>
  );
}
