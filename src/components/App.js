import '../styles/App.css';
import Home from './Home'
import Header from './Header'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import About from './About'
import Art from './Art'
import { useEffect, useState } from 'react';

function App() {
  const [poems, setPoems] = useState()

  useEffect(() => {
    fetch("http://localhost:3001/poems")
    .then(r => r.json())
    .then(setPoems)
  }, [])
  

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
        <Art poems={poems}/>
      </Route>
    </div>
  );
}

export default App;
