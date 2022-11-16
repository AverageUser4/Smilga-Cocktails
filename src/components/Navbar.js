import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="nav-center">

        <a href="/">
          <img src={logo} className="logo"/>
        </a>

        <ul className="nav-links">

          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>

        </ul>

      </div>

    </nav>
  )
}

export default Navbar
