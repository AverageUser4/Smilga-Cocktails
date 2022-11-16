import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'

// import components
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar/>

      <MyRouter route='/'>
        <Home/>
      </MyRouter>

      <MyRouter route='/about'>
        <About/>
      </MyRouter>

      <MyRouter route='/drink/'>
        <SingleCocktail/>
      </MyRouter>

      <MyRouter route='/error'>
        <Error/>
      </MyRouter>
    </div>
  )
}

function MyRouter({ children, route }) {

  if(location.pathname !== '/' && route === '/')
    return;

  if(
      (location.pathname !== route && !route.endsWith('/')) ||
      !location.pathname.includes(route)
    )
    return;

  return (
    <>
    
      {children}
    
    </>
  );
}

export default App
