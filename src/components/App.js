import '../styles/App.css';
import React from 'react'
import Home from './Home'
import Contact from './Contact'
import Header from './Header'
import { Route, useHistory, Switch } from 'react-router-dom';
import About from './About'
import Art from './Art'
import { useEffect, useState } from 'react';

function App() {
  const history = useHistory()

  const handleLogoClick = () => {
    history.push('/art')
  }
  
  return (
    <div className="App">
      {/* <Header /> */}
      <Switch >
      <Route exact path="/">
        <Home 
          onLogoClick={handleLogoClick}
        />
      </Route>

      <Route exact path='/about'>
        <About />
      </Route>

      <Route exact path='/art'>
        <Art />
      </Route>

      <Route exact path='/contact'>
        <Contact />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
