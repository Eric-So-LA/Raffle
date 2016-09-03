import React, {Component} from 'react';

import Navigation from './navigation';
import Title from './title';

export default class App extends Component{
	render(){
		return(
				<div>
					<Title />
					<Navigation />
					<section>
						{this.props.children}
					</section>
				</div>
			)
	}
}