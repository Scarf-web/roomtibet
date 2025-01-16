import React from "react";
import pouse from "../images/svgs/about_pause.svg";
import topleft from "../images/about/topleft.jpeg";
import "../styles/about.css";

export default function About() {
  return (
    <section className="aboutContainer">
      <div className="imgContainer">
        <img src={topleft} alt="img" />
        <div className="downRightImg">
          <img src={pouse} alt="img" />
        </div>
      </div>
      <div className="aboutTextContainer">
        <h3>о нашем походе</h3>
        <h2>Исследуйте все горные массивы мира вместе с нами</h2>
        <p>
          Его корни уходят в один фрагмент классической латыни 45 года н.э., то
          есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни
          из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых
          странных слов в Lorem Ipsum, "consectetur" и занялся его поисками в
          классической латинской литературе.
        </p>
        <button className="aboutButton">Программа тура</button>
      </div>
    </section>
  );
}
