import React from "react"
import { Link } from "react-router-dom"

export default function PageNotFound() {
  return (
    <>
      <h2>Page Not Found</h2>
      <Link to="/">Back To Home Page</Link>
    </>
  )
}
