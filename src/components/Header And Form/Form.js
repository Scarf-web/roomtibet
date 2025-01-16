import React, { useState } from "react";
import "../../styles/Header And Form/form.css";
import arrow from "../../images/svgs/form_arrow.svg";

export default function Form() {
  const [isActiveOne, setIsActiveOne] = useState(true);
  const [classNameOne, setClassNameOne] = useState("form_select_list noselect");
  const [secondClassNameOne, setSecondClassNameOne] = useState("form_select noselect");
  const [isActive, setIsActive] = useState(true);
  const [className, setClassName] = useState("form_select_list noselect");
  const [secondClassName, setSecondClassName] = useState("form_select noselect");

  function toggleOne() {
    setIsActiveOne(isActiveOne ? false : true);
    changeClassOne();
    addClassOne();
  }

  function changeClassOne() {
    setClassNameOne(
      isActiveOne
        ? "form_select_list__active noselect"
        : "form_select_list noselect"
    );
  }

  function addClassOne() {
    setSecondClassNameOne(
      isActiveOne ? "form_select rotateImg noselect" : "form_select noselect"
    );
  }

  function toggle() {
    setIsActive(isActive ? false : true);
    changeClass();
    addClass();
  }

  function changeClass() {
    setClassName(
      isActive
        ? "form_select_list__active noselect"
        : "form_select_list noselect"
    );
  }

  function addClass() {
    setSecondClassName(
      isActive ? "form_select rotateImg noselect" : "form_select noselect"
    );
  }

  
  return (
    <div className="formContainer">
      <h1>Насладись прогулкой в горах с командой единомышленников</h1>
      <form>
        <div className="form_item">
          <div className={secondClassNameOne} onClick={toggleOne}>
            <p>Локация для тура</p>
            <img src={arrow} alt="img" />
            <div className={classNameOne}>
              <p>ПОТАЛЬСКИЙ ДВОРЕЦ</p>
              <p>ДЖОКАНГ ХРАМ</p>
              <p>SERA МОНАСТЫРЬ</p>
              <p>DREPUNG МОНАСТЫРЬ</p>
            </div>
          </div>
          <p className="form_hint">{isActiveOne ? "выберите из списка" : ""}</p>
        </div>
        <div className="form_item">
          <div className="form_select">
            <input title="data" type="date" max={11.2025}></input>
          </div>
          <p className="form_hint">выберите дату</p>
        </div>
        <div className="form_item">
          <div className={secondClassName} onClick={toggle}>
            <p>Участники</p>
            <img src={arrow} alt="img" />
            <div className={className}>
              <p>ПОТАЛЬСКИЙ ДВОРЕЦ</p>
              <p>ДЖОКАНГ ХРАМ</p>
              <p>SERA МОНАСТЫРЬ</p>
              <p>DREPUNG МОНАСТЫРЬ</p>
            </div>
          </div>
          <p className="form_hint">{isActive ? "минимуму 4 человека" : ""}</p>
        </div>
      </form>
    </div>
  );
}
