import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { queryString, setQueryString } = useGlobalContext();

  return (
    <section className="section search">
      
      <form className="search-form">

        <div className="form-control">

          <label htmlFor="search-input">
            Search for your favorite cocktail
          </label>

          <input
            id="search-input"
            value={queryString}
            onChange={(e) => setQueryString(e.target.value)}
          />

        </div>

      </form>

    </section>
  )
}

export default SearchForm
