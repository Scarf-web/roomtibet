import React from "react";
import "./styles/app.css";
import "../src/fonts/nextart/NEXT ART_Bold.otf";
import "../src/fonts/nextart/NEXT ART_Heavy.otf";
import "../src/fonts/nextart/NEXT ART_Light.otf";
import "../src/fonts/nextart/NEXT ART_Regular.otf";
import "../src/fonts/nextart/NEXT ART_SemiBold.otf";
import MainBlock from "./components/Header And Form/MainBlock";
import About from "./components/About";
import OurOffer from "./components/OurOffer";
import Popular from "./components/Popular";

function App() {
  return (
    <div className="main">
      <MainBlock />
      <About />
      <OurOffer/>
      <Popular/>
    </div>
  );
}

export default App;
