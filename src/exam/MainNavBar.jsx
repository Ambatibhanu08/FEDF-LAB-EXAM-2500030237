import React from 'react'
import { Link } from "react-router-dom"

function MainNavBar() {
  return (
    <div>

      <h2>Book Management System</h2>

      <Link to="/">Home</Link> 
      <Link to="/register">Book Registration</Link> 
      <Link to="/books">Book List</Link> 
      <Link to="/api">API Demo</Link>

      <hr/>

    </div>
  )
}

export default MainNavBar