import React from "react"
import bgImg from "../images/about-hero.jpg"
import { Link } from "react-router-dom"

export default function About() {
  return (
    <div className="about-page-container">
      <div className="about-page-content">
        <h1>What is the most exciting car you have ever driven?</h1>
      </div>
      <img src={bgImg} className="about-hero-image" />
      <div className="about-page-cta">
        <h2>
          Your destination is waiting.
          <br />
          Your car is ready.
        </h2>
        <Link className="link-button" to="/cars">
          Explore our cars
        </Link>
      </div>
    </div>
  )
}
