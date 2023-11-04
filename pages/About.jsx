import React from "react"
import bgImg from "../images/about-hero.jpg"
import { Link } from "react-router-dom"

export default function About() {
  return (
    <div className="about-page-container">
      <img src={bgImg} className="about-hero-image" />
      <div className="about-page-content">
        <h1>What is the most exciting car you have ever driven?</h1>
        <p>
          Our mission is to revitalize your driving experience with the perfect
          car rental. Our cars are checked before each ride to ensure your
          safety.
        </p>
        <p>
          Our team is full of car enthusiasts who know firsthand the magic of
          driving.
        </p>
      </div>
      <div className="about-page-cta">
        <h2>
          Your destination is waiting.
          <br />
          Your car is ready.
        </h2>
        <Link className="link-button" to="/vans">
          Explore our cars.
        </Link>
      </div>
    </div>
  )
}
