import React from "react";
import logo from "../../images/svgs/logo.svg"
import "../../styles/Header And Form/header.css"

export default function Header() {
    return (
        <header>
            <img src={logo} alt="img"/>
            <nav>
                <a href="/#">Главная<div className="line"/></a>
                <a href="/#">Про гида<div className="line"/></a>
                <a href="/#">Программа тура<div className="line"/></a>
                <a href="/#">Стоимость<div className="line"/></a>
                <a href="/#">Блог<div className="line"/></a>
                <a href="/#">Контакты<div className="line"/></a>
                <button>Консультация</button>
            </nav>
        </header>
    )
}