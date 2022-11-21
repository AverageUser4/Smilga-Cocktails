import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ name, category, alcoholic, id, image }) => {
  return (
    <article className="cocktail">

      <img src={image}/>

      <footer className="cocktail-footer">

        <h3>{name}</h3>

        <h4>{category}</h4>

        <p>{alcoholic}</p>

        <Link to={`/cocktail/${id}`} className="btn btn-primary">Details</Link>

      </footer>

    </article>
  )
}

export default Cocktail
