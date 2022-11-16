import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <main className="section error-page">

      <div className="error-container">

        <h1>oops! it&apos;s a dead end</h1>

        <a href="/" className="btn btn-primary">back home</a>

      </div>

    </main>
  )
}

export default Error
