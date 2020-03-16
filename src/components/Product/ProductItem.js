/* eslint-disable no-useless-constructor */
/* eslint-disable no-mixed-operators */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';

class ProductItem extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		const { productName, unitPrice, thumbnail } = this.props.product;
		return (
			<div className="col-md-3 col-sm-6">
				<img className="img-fluid img-thumbnail" src={thumbnail} />
				<h5 className="mt-2"> {productName} </h5>
				<p className="title text-right"> {unitPrice} THB</p>

				{this.props.onAddorder &&
				<button className="btn btn-block btn-secondary title" onClick={()=> this.props.onAddorder(this.props.product)}>
					ซื้อ
				</button>
				}

             {this.props.onEditProduct || this.props.ondelProduct &&
				<button className="btn btn-info col-5 mt-2 title" onClick={()=> this.props.oneditProduct(this.props.product)}>
					แก้ไข
				</button>
					}
				
					{this.props.onEditProduct || this.props.ondelProduct &&
				<button className="btn btn-danger col-5 float-right mt-2 title" onClick={()=> this.props.ondelProduct(this.props.product)}>
					ลบ
				</button>
					 }
					 
				<hr />
			</div>
		);
	}
}

export default ProductItem;
