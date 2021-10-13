import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './header';
import InfoPage from './countryInfoPage';
import reportWebVitals from './reportWebVitals';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useHistory,
} from 'react-router-dom';
ReactDOM.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Switch>
				<Route exact path="/UI-training-5/" component={App} />
				<Route exact path="/UI-training-5/info" component={InfoPage} />
				<Route path="/UI-training-5/info:data" component={InfoPage} />
			</Switch>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
