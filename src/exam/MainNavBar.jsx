import React from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"

function MainNavBar() {
  return (
    <div className="navbar">

      <Link to="/">Home</Link>
      <Link to="/register">Add Book</Link>
      <Link to="/books">Book List</Link>
      <Link to="/api">API Demo</Link>

    </div>
  )
}

export default MainNavBar