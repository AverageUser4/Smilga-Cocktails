import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import Error from './Error.js';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const [drinks, setDrinks] = React.useState([]);

  const path = location.pathname;
  const drink = drinks?.[0];

  React.useEffect(() => {
    fetch(url + path.slice(path.lastIndexOf('/') + 1))
      .then(data => data.json())
      .then(json => setDrinks(json.drinks))
      .catch(e => console.error(e));
  }, []);

  console.log(drinks, drinks[0])

  if(!drinks?.length)
    return <h1>Loading...</h1>

  return (
    <main className="section cocktail-section">

      <a href="/" className="btn btn-primary">Back home</a>

      <h2 className="section-title">{drink.strDrink}</h2>
      
      <article className="drink">

        <img src={drink.strDrinkThumb}/>

        <div className="drink-info">

          <p><span className="drink-data">name :</span> {drink.strDrink}</p>
          <p><span className="drink-data">category :</span> {drink.strCategory}</p>
          <p><span className="drink-data">info :</span> {drink.strAlcoholic}</p>
          <p><span className="drink-data">glass :</span> {drink.strGlass}</p>
          <p><span className="drink-data">instructions :</span> {drink.strInstructions}</p>
          <p><span className="drink-data">ingredients :</span> {drink.strIngredient1}, {drink.strIngredient2}, {drink.strIngredient3}, {drink.strIngredient4}</p>

        </div>

      </article>

    </main>
  )
}

export default SingleCocktail
