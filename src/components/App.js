import '../styles/App.css';
import React from 'react'
import Home from './Home'
import Contact from './Contact'
import Header from './Header'
import { Route } from 'react-router-dom';
import About from './About'
import Art from './Art'
import { useEffect, useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <Header />
      
      <Route exact path="/">
        <Home />
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
    </div>
  );
}

export default App;
