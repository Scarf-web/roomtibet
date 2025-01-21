import React from "react";
import { Backdrop } from "@mui/material";

export default function BlogGrid(props) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className="blogGridBlock">
      <img onClick={handleOpen} src={props.image} alt="img"/>
      <div onClick={handleOpen} className="blogGridText">
        <h1 className="h1-blog">{props.title}</h1>
        <p className="p-blog" style={{height: "116px", overflow: "hidden"}}>{props.description}</p>
        <div className="blogGridInfo">
          <h3 className="h3-blog">{props.date}</h3>
          <p className="p-blog" style={{ color: "#1A3E3E", cursor: "pointer", fontWeight: "700" }}>
            читать статью
          </p>
        </div>
      </div>
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 10 })}
        open={open}
        onClick={handleClose}
      >
       <div className="blogGridCard__open">
        <img src={props.image} alt="img"/>
        <div className="blogGridCard__open_title">
          <h1 className="h1-blog__open">
            {props.title}
          </h1>
        </div>
        <div className="blogGridCard__open_text">
          <p className="p-blog__open">
            {props.description}
          </p>
        </div>
       </div>
      </Backdrop>
    </div>
  );
}
