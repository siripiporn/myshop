import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import Hearder from '../components/Header';
import Footer from '../components/Footer';
import Monitor from '../components/monitor/Monitor';
import { connect } from 'react-redux';
import { productsFetch } from '../actions';


class Home extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
	}

	componentDidMount() {
    this.props.productsFetch();
	}

	render() {
		return (
			<div>
				<Hearder />
				<Monitor products={this.props.products} />
				<Footer company="shopping thailand" email="siriporn.push@gmail.com" />
			</div>
		);
	}
}

function mapStateToProps({ products }){
	return {products};
}

export default connect(mapStateToProps, { productsFetch })(Home);
