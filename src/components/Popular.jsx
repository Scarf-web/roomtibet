import React from "react";
import "../styles/popular.css";
import firstimage from "../images/popular/firstimage.jpeg";
import secondimage from "../images/popular/secondimage.jpeg"
import threeimage from "../images/popular/threeimage.jpeg"

import CardItem from "./CardItem";

export default function Popular() {
  return (
    <section className="popularContainer">
      <div className="titles" style={{alignItems: "center"}}>
        <h3>по версии отдыхающих</h3>
        <h2>Популярные направления</h2>
      </div>
      <div className="popularCardContainer">
        <CardItem
          image={firstimage}
          title="Озеро возле гор"
          subtitle="романтическое приключение"
          description="Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, consectetur и занялся его поисками в классической латинской литературе."
          price="480"
          estimation="4.9"
        />
        <CardItem
          image={secondimage}
          title="Ночь в горах"
          subtitle="в компании друзей"
          description="Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, consectetur и занялся его поисками в классической латинской литературе."
          price="500"
          estimation="4.5"
        />
        <CardItem
          image={threeimage}
          title="Йога в горах"
          subtitle="для тех, кто забоится о себе"
          description="Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад. Ричард МакКлинток, профессор латыни из колледжа Hampden-Sydney, штат Вирджиния, взял одно из самых странных слов в Lorem Ipsum, consectetur и занялся его поисками в классической латинской литературе."
          price="230"
          estimation="5.0"
        />
      </div>
      <button className="pupularButton" type="button">
        Рейтинг направлений
      </button>
    </section>
  );
}
