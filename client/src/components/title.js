import React, { Component } from 'react';
import { Link } from 'react-router';
export default class Title extends Component {
	render(){
		return(
			<nav className="nav-title">
				<Link to="/">Raffle Waffle</Link>
				<button>Sign in</button>
				<button>Sign up</button>
			</nav>
			)
	}
}