import React from 'react';

import '../MovieCard/MovieCard.css';

class MovieCard extends React.Component{
  
render(){

let movieDetails = this.props.moviesInfo;
 return(
    movieDetails.map(el => {
      return(
        <span  key={el.episode_id} className="movie-title">
          {`Episode:${el.episode_id} - ${el.title}`}
        </span>
      )
    })
  )
 }
}

export default MovieCard