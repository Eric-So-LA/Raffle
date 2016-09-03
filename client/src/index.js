import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

ReactDOM.render(
	<Router history={browserHistory} >
		<Route path="/" component={App} />
	</Router>,
	document.querySelector('.main'));