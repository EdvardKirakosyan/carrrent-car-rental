import React from "react"
import { Link } from "react-router-dom"

export default function PageNotFound() {
  return (
    <div className="page-not-found">
      <h2>Page Not Found</h2>
      <Link className="page-not-found-link" to="/">
        Back To Home
      </Link>
    </div>
  )
}
