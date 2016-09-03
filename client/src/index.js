import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/app';
import Landing from './components/landing';
ReactDOM.render(
	<Router history={browserHistory} >
		<Route path="/" component={App} >
			<IndexRoute path="/landing" component={Landing} />
		</Route>
	</Router>,
	document.querySelector('.main'));