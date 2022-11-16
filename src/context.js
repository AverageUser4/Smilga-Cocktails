import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

let lastFetchTime = 0;

const AppProvider = ({ children }) => {
  const [queryString, setQueryString] = React.useState('');
  const [drinks, setDrinks] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);

  useEffect(() => {
    async function fetchData() {
      const now = Date.now();
      setIsFetching(true);
      
      const data = await fetch(url + queryString);
      const json = await data.json();

      setIsFetching(false);
      
      if(now < lastFetchTime)
        return;

      lastFetchTime = now;
      setDrinks(json?.drinks || []);
    }

    fetchData();
  }, [queryString]);

  return (
    <AppContext.Provider 
      value={{
        queryString,
        setQueryString,
        drinks,
        isFetching
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
