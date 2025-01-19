import React from "react";
import "../styles/impressions.css";
import image_1 from "../images/impressions/image_1.jpeg";
import image_2 from "../images/impressions/image_2.jpeg";
import image_3 from "../images/impressions/image_3.jpeg";
import image_4 from "../images/impressions/image_4.jpeg";
import image_5 from "../images/impressions/image_5.jpeg";
import image_6 from "../images/impressions/image_6.jpeg";
import ImpressionsGrid from "./Impressions Grid/ImpressionsGrid";

export default function Impressions() {
  return (
    <div className="impressionsContainer">
      <div className="titles" style={{ alignItems: "center" }}>
        <h3>фото-отчет</h3>
        <h2>Делимся впечатлениями</h2>
      </div>
      <ImpressionsGrid
        image_1={image_1}
        image_2={image_2}
        image_3={image_3}
        image_4={image_4}
        image_5={image_5}
        image_6={image_6}
      />
      <button className="impressionsButton">Наш pinterest</button>
      <div className="impressionsAbsolute" style={{ display: "none" }}>
        <div className="titles">
          <h3>актуально</h3>
          <h2>Получайте полезные рассылки о путешествиях</h2>
        </div>
        <div>
          <div className="impressionsEmailContainer">
            <p style={{ fontSize: "16px" }}>Введите e-mail адрес</p>
            <div className="impressionsEmailForm">
              <input type="email" placeholder="name@domain.com" />
              <button className="impressionsEmailButton">
                Подписаться на новости
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
