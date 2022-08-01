import React from "react"

export default function Info() {
    return (
        <section className="info">
            <img src={require("../img/BrentA.jpg")} alt="Myself wearing a cool pair of sunglasses"/>
            <h1>Brent Andries</h1>
            <h4>Frontend Developer</h4>
            <p className="email">brent.andries2000@gmail.com</p>
            <button>Email</button>
        </section>
    )
}   