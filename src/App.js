import React, { Component } from 'react';
import './App.css';
import Bikelist from './components/Bikelist';
import Navigator from './components/Navigator';
import Bikesearch from './components/Bikesearch';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {

	render() {

		return (
			<div className="App">
				<BrowserRouter>
					<div>
						<Navigator />
						<Switch>
							<Route exact path="/" component={Bikelist} />
							<Route path="/bikelist/" component={Bikelist} />
							<Route path="/search/" component={Bikesearch} />
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}
export default App;
