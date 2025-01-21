import React from "react";
import "../styles/impressions.css";
import ImpressionsGrid from "./Impressions Grid/ImpressionsGrid";

export default function Impressions() {
  return (
    <div className="impressionsContainer">
      <div className="titles" style={{ alignItems: "center" }}>
        <h3>фото-отчет</h3>
        <h2>Делимся впечатлениями</h2>
      </div>
      <ImpressionsGrid />
      <button className="impressionsButton">Наш pinterest</button>
      <div className="impressionsAbsolute" >
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
            <p style={{fontSize: "14px"}}>подписываясь на новости, вы автоматически соглашаетесь с <u style={{cursor: "pointer c"}}>условиями обработки персональных данных и правилами рекламных рассылок</u></p>
          </div>
        </div>
      </div>
    </div>
  );
}
