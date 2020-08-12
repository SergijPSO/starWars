import React from 'react';

import '../MovieCard/MovieCard.css';

class MovieCard extends React.Component{
  
render(){

let movieDetails = this.props.moviesInfo;
let k =0;
 return(
    movieDetails.map(el => {
      return(
        <span  key={k++} className="movie-title">
          {`Episode:${el.episode_id} - ${el.title}`}
        </span>
      )
    })
  )
 }
}

export default MovieCard