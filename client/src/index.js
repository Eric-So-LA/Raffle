import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import Landing from './components/landing';
import Dashboard from './components/dashboard';
import CreateRaffle from './components/createRaffle';
import YourRaffle from './components/yourRaffles';
import RecentRaffle from './components/recentRaffles';
import Info from './components/info';
ReactDOM.render(
	<Router history={browserHistory} >
		<Route path="/" component={App} >
			<IndexRoute component={Landing} />
			<Route path="/dashboard" component={Dashboard} />
			<Route path="/createRaffle" component={CreateRaffle} />
			<Route path="/yourRaffles" component={YourRaffle} />
			<Route path="/recentRaffles" component={RecentRaffle} />
			<Route path="/info" component={Info} />
		</Route>
	</Router>,
	document.querySelector('.main'));

ReactDOM.render(
	document.querySelector('#test')
);