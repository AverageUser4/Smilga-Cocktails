import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <main className="section error-page">

      <div className="error-container">

        <h1>oops! it&apos;s a dead end</h1>

        <Link to="/" className="btn btn-primary">back home</Link>

      </div>

    </main>
  )
}

export default Error
