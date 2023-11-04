import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div className="home-container">
      <h1>You got the place to drive, we got the vehicles.</h1>
      <p>Add new experiences to your life by joining the caRRRent.</p>
      <Link className="to-vans" to="vans">
        Find your car
      </Link>
    </div>
  )
}
