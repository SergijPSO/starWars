import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import Loader from '../global/Loader/Loader';

import '../MovieList/MovieList.css';
import axios from 'axios';

class MovieList extends React.Component{

	state = {
		MoviesData : [],
		loading: true
	}

	componentDidMount() {
		axios.get('https://swapi.dev/api/films/').then(res => {
			this.setState({
				loading: false,
				MoviesData: res.data.results
			})
		})
	}

 render(){  
  return(
    <>
    	<MovieCard moviesInfo={this.state.MoviesData}/>
		{this.state.loading && <Loader />}
    </>        
  )
 }
}

export default MovieList