import React from 'react';
import '../MovieItem/MovieItem.css';
import {NavLink} from 'react-router-dom'

export default class MovieItem  extends React.Component {
render() {
	console.log(this)
		return(
			<>
				<h1>I am a new item</h1>
				<NavLink to='/'>
						<button>Back</button>	
				</NavLink>
			</>
		) 
	}
}