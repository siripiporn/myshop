import './css/App.css';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Order from './containers/order/Order';
import Product from './containers/product/Product';
import ProductEdit from './containers/product/ProductEdit';
import NotFound from './containers/error/NotFound';
 

class App extends Component {
	renderRouter() {
		return (
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path='/About' component={About} />
				<Route path='/order' component={Order} />
				<Route path='/Products' component={Product} />
				<Route path='/product/add' component={ProductEdit} />
				<Route path='/product/edit/:id' component={ProductEdit} />

				<Route component={NotFound} />
	
			</Switch>
		);
	}

	render() {
		return <BrowserRouter>{this.renderRouter()}</BrowserRouter>;
	}
}

export default App;
