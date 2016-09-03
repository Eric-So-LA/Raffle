import React, { Component } from 'react';

import { Link } from 'react-router';
export default class Navigation extends Component {

	render(){
		return (
				<nav>
					<ul>
						<li>
							<Link to="/dashboard">Dashboard</Link>
						</li>
						<li>
							<Link to="/yourRaffles">Your Raffles</Link>
						</li>
						<li>
							<Link to="/recentRaffles">Recent Raffles</Link>
						</li>
						<li>
							<Link to="/createRaffle">Create Raffle</Link>
						</li>
						<li>
							<Link to="/info">More Information</Link>
						</li>
					</ul>
				</nav>
			)
	}
}