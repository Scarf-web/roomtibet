import React from "react";

export default function BlogGrid(props) {
  return (
    <div className="blogGridBlock">
      <img src={props.image} />
      <div className="blogGridText">
        <h1 className="h1-blog">{props.title}</h1>
        <p className="p-blog" style={{height: "116px", overflow: "hidden"}}>{props.description}</p>
        <div className="blogGridInfo">
          <h3 className="h3-blog">{props.date}</h3>
          <p className="p-blog" style={{ color: "#1A3E3E", cursor: "pointer", fontWeight: "700" }}>
            читать статью
          </p>
        </div>
      </div>
    </div>
  );
}
