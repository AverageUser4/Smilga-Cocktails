import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import Error from './Error.js';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
  const [drinks, setDrinks] = React.useState([]);
  const [isError, setIsError] = React.useState(false);

  const { id } = useParams();
  const drink = drinks?.[0];

  React.useEffect(() => {
    fetch(url + id)
      .then(data => data.json())
      .then(json => {
        if(!json.drinks)
          setIsError(true);
        else
          setDrinks(json.drinks);
      })
      .catch(e => {
        console.error(e);
        setIsError(true);
      });
  }, []);

  if(isError)
    return <Error/>;

  if(!drinks?.length)
    return <Loading/>;

  let ingredients = '';
  for(let i = 1; i <= 15; i++) {
    if(!drink[`strIngredient${i}`])
      break;

    ingredients += drink[`strIngredient${i}`];
    ingredients += ', ';
  }

  ingredients = ingredients.slice(0, ingredients.length - 2);

  return (
    <main className="section cocktail-section">

      <Link to="/" className="btn btn-primary">Back home</Link>

      <h2 className="section-title">{drink.strDrink}</h2>
      
      <article className="drink">

        <img src={drink.strDrinkThumb}/>

        <div className="drink-info">

          <p><span className="drink-data">name :</span> {drink.strDrink}</p>
          <p><span className="drink-data">category :</span> {drink.strCategory}</p>
          <p><span className="drink-data">info :</span> {drink.strAlcoholic}</p>
          <p><span className="drink-data">glass :</span> {drink.strGlass}</p>
          <p><span className="drink-data">instructions :</span> {drink.strInstructions}</p>
          <p><span className="drink-data">ingredients :</span> {ingredients}</p>

        </div>

      </article>

    </main>
  )
}

export default SingleCocktail
