import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { drinks, isFetching } = useGlobalContext();

  let content = <h3 className="section-title">no cocktails matched your search criteria</h3>;

  const cocktailElements = drinks.map(drink =>
    <Cocktail
      key={drink.idDrink}
      id={drink.idDrink}
      name={drink.strDrink}
      category={drink.strCategory}
      alcoholic={drink.strAlcoholic}
      image={drink.strDrinkThumb}
    />
  );

  if(cocktailElements.length)
    content = <div className="cocktails-center">{cocktailElements}</div>


  return (
    <section className="section">
      
      <h2 className="section-title">Cocktails</h2>

      {
        isFetching ?
          <Loading/>
        :
          content
      }

    </section>
  )
}

export default CocktailList
