import React from 'react';
import MovieList from "./components/MovieList/MovieList";
import {Switch, Route} from 'react-router-dom'

import './App.css';
import MovieItem from './components/MovieItem/MovieItem.js';


function App() {
  return (
    <div className = "app-content">
        <Switch>
          <Route exact path='/' component={MovieList} />
          <Route path='/film-:id' component={MovieItem} />
        </Switch>
    </div>
  );
  
}

export default App;
