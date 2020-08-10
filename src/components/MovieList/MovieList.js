import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
// import ReactDom from 'react-dom';

import '../MovieList/MovieList.css';

import axios from 'axios';

class MovieList extends React.Component{

	state = {
		MoviesData : []
	}

	componentDidMount() {
		axios.get('https://swapi.dev/api/films/').then(res => {
			this.setState({
				MoviesData: res.data.results
			})
		})
	}

 render(){  
  return(
    <>
    	<MovieCard MoviesInfo={this.state.MoviesData}/>
    </>        
  )
 }
}

export default MovieList