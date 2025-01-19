import React from "react";
import "../styles/blog.css";
import BlogGrid from "./Blog Grid/BlogGrid";
import topleft from "../images/blog/topleft.jpeg";
import topright from "../images/blog/topright.jpeg";
import downleft from "../images/blog/downleft.jpeg";
import downright from "../images/blog/downright.jpeg";

export default function Blog() {
  return (
    <section className="blogContainer">
      <div className="titles" style={{alignItems: "center"}}>
        <h3>делимся впечатлениями</h3>
        <h2>Блог о путешествиях</h2>
      </div>
      <div className="blogGrid">
        <BlogGrid
          image={topleft}
          title="Красивая Италя, какая она в реальности?"
          description="Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации."
          date="01/04/2023"
        />
        <BlogGrid
          image={topright}
          title="Долой сомнения! Весь мир открыт для вас!"
          description="Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих условий активизации ...Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации ... независимые способы реализации соответствующих условий активизации ..."
          date="01/04/2023"
        />
        <BlogGrid
          image={downleft}
          title="Как подготовиться к путешествию в одиночку?"
          description="Для современного мира базовый вектор развития предполагает."
          date="01/04/2023"
        />
        <BlogGrid
          image={downright}
          title="Индия ... летим?"
          description="Для современного мира базовый."
          date="01/04/2023"
        />
      </div>
      <button type="button" className="blogButton">
        Другие материалы
      </button>
    </section>
  );
}
