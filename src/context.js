import React, { useState, useContext, useEffect } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

let lastFetchTime = 0;

const AppProvider = ({ children }) => {
  const [queryString, setQueryString] = useState('');
  const [drinks, setDrinks] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const now = Date.now();
      setIsFetching(true);
      
      const data = await fetch(url + queryString);
      const json = await data.json();

      if(now < lastFetchTime)
        return;

      lastFetchTime = now;
      setDrinks(json?.drinks || []);
      setIsFetching(false);
    }

    const timeoutID = setTimeout(fetchData, 500);

    return () => clearTimeout(timeoutID);
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
