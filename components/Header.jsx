import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  }

  return (
    <header>
      <Link className="site-logo" to="/">
        caRRRent
      </Link>
      <nav>
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          HOST
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/cars"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          CARS
        </NavLink>
      </nav>
    </header>
  )
}
