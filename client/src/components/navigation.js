import React, { Component } from 'react';

import { Link } from 'react-router';
export default class Navigation extends Component {

	render(){
		return (
				<nav className="navigation">
					<ul>
						<li>
							<Link className="navLink" to="/dashboard">Dashboard</Link>
						</li>
						<li>
							<Link className="navLink" to="/yourRaffles">Your Raffles</Link>
						</li>
						<li>
							<Link className="navLink" to="/recentRaffles">Recent Raffles</Link>
						</li>
						<li>
							<Link className="navLink" to="/createRaffle">Create Raffle</Link>
						</li>
						<li>
							<Link className="navLink" to="/info">More Information</Link>
						</li>
					</ul>
				</nav>
			)
	}
}