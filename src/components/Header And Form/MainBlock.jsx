import React from "react";
import Header from "./Header";
import "../../styles/Header And Form/mainblock.css"
import Form from "./Form";

export default function MainBlock() {
    return (
        <section className="mainBlock">
            <Header/>
            <Form/>
        </section>
    )
}