import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductList from "../../components/Product/ProductList";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { productsFetch, productDelete } from "../../actions";

class Product extends Component {
  constructor(props) {
    super(props);
    this.delProduct = this.delProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
  }

  componentDidMount() {
    this.props.productsFetch();
  }

  editProduct(product) {
    this.props.history.push("product/edit/" + product.id);
  }

  delProduct(product) {
    this.props.productDelete(product.id);
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              {/* <h4>เพิ่มสินค้าใหม่</h4> */}
            </div>
            <div className="col-6">
              <button
                className="btn btn-success title float-right"
                onClick={() => this.props.history.push("product/add")}>เพิ่มสินค้าใหม่</button>
            </div>
          </div>

            {this.props.products && Array.isArray(this.props.products) &&
         ( <ProductList products={this.props.products}  
          ondelProduct = {this.delProduct }  oneditProduct = { this.editProduct }
          />)
}
        </div>
        <Footer company="shop thailand" email="siriporn.push@gmail.com" />
      </div>
    );
  }
}

function mapStateToProps({ products }){
	return {products};
}

export default withRouter(connect(mapStateToProps,{ productsFetch, productDelete }) (Product));
