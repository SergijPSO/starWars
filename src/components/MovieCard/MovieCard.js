import React from 'react';
import '../MovieCard/MovieCard.css';

class MovieCard extends React.Component{
    
render(){
 return(
   <div>
     <p>i`m Picture</p>
     <h2 className="movie-headline">Healine</h2>
     <p className="movie-description">Some film description</p>
   </div>
  )
 }
}

export default MovieCard