import React from "react";
import topleft from "../images/Offer/topleft.jpeg";
import topright from "../images/Offer/topright.jpeg";
import downleft from "../images/Offer/downleft.jpeg";
import downright from "../images/Offer/downright.jpeg";
import gid from "../images/svgs/offer_gid.svg";
import guard from "../images/svgs/offet_guard.svg";
import price from "../images/svgs/offer_prices.svg";
import "../styles/ouroffer.css";

export default function OurOffer() {
  return (
    <section className="ourOfferContainer">
      <div className="ourTextContainer">
        <div className="titles">
        <h3>наше предложение</h3>
        <h2>Лучшие программы для тебя</h2>
        </div>
        <p>
          Его корни уходят в один фрагмент классической латыни 45 года н.э., то
          есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни
          из колледжа.
        </p>
        <div className="textGrid">
          <img src={gid} alt="img" />
          <div>
            <h4>Опытный гид</h4>
            <p>
              Для современного мира базовый вектор развития предполагает
              независимые способы реализации соответствующих условий
              активизации.
            </p>
          </div>
          <img src={guard} alt="img" />
          <div>
            <h4>Безопасный поход</h4>
            <p>
              Для современного мира базовый вектор развития предполагает
              независимые способы реализации соответствующих условий
              активизации.
            </p>
          </div>
          <img src={price} alt="img" />
          <div>
            <h4>Лояльные цены</h4>
            <p>
              Для современного мира базовый вектор развития предполагает
              независимые способы реализации соответствующих условий
              активизации.
            </p>
          </div>
        </div>
        <button>Стоимость программы</button>
      </div>
      <div className="imageContainer">
        <img src={topleft} alt="img" />
        <img src={topright} alt="img" />
        <img src={downleft} alt="img" />
        <img src={downright} alt="img" />
      </div>
    </section>
  );
}
