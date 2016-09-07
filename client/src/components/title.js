import React, { Component } from 'react';
import { Link } from 'react-router';
export default class Title extends Component {
	render(){
		return(
			<nav className="nav-title">
				<Link to="/">Raffle Waffle</Link>
				<button id="signin">Sign in</button>
				<button id="signup">Sign up</button>
			</nav>
			)
	}
}