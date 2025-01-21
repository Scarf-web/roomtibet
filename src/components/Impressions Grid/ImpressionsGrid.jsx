import React from "react";
import magnifier from "../../images/svgs/impressions_magnifier.svg";
import {images} from "./Impressions.array";
import Backdrop from '@mui/material/Backdrop';

export default function ImpressionsGrid() {
  const [open, setOpen] = React.useState(false);
  const [activeSrc, setActiveSrc] = React.useState()
  const handleClose = () => {
    setOpen(false);
    setActiveSrc(null)
  };
  const handleOpen = (src) => {
    setOpen(true);
    setActiveSrc(src)
  };


  return (
    <div className="impressionsGridContainer">
      {images.map(image => {
        return (
          <div className="impressionsGridCard noselect" key={image.id} style={image.area}>
            <img className="impressionsGirdImage noselect" src={image.src} alt="img" />
            <img onClick={() => {handleOpen(image.src)}} className="imressionsMagnifier noselect" src={magnifier} alt="img" />
          </div>
        )
        })}
      <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={open}
        onClick={handleClose}
      >
        <img src={activeSrc} alt="img" className="noselect"/>
      </Backdrop>
    </div>
  );
}
