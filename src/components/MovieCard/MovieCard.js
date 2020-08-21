import React from 'react';
import '../MovieCard/MovieCard.css';

import {NavLink} from 'react-router-dom';

class MovieCard extends React.Component{
render(){
  
let movieDetails = this.props.moviesInfo;

  return(
    movieDetails.map(el => {
      return(
        <NavLink to={`/film-${el.episode_id}`}>
          <span  key={el.episode_id} className="movie-title">
            {`Episode:${el.episode_id} - ${el.title}`}
          </span>
        </NavLink>
      )
    })
  )
 }
}

export default MovieCard