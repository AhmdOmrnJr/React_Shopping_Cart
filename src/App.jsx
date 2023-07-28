import React, { Component } from 'react';
import Navbar from './Component/Navbar';
import Products from './Component/Products';
import Cart from './Component/Cart';

class App extends Component {

  state = { cartProduct: [] }

  componentDidMount() {
    let data = JSON.parse(localStorage.getItem("data"))
    if (data != null) {
      this.setState({cartProduct: data})
    }
  }

  addToLocalStorage = (data) => {
    localStorage.setItem("data", JSON.stringify(data))
  }

  addProduct = (product) => {
    let exist = this.state.cartProduct.find((elm) => elm.id === product.id)
    if (exist) {
      let cart = this.state.cartProduct.map((elm) => elm.id === product.id ? { ...exist, qty: exist.qty + 1 } : elm)
      this.setState({ cartProduct: cart })
      this.addToLocalStorage(cart)
    }
    else {
      let cart = [...this.state.cartProduct, { ...product, qty: 1 }]
      this.setState({ cartProduct: cart })
      this.addToLocalStorage(cart)
    }
  }


  removeProduct = (product) => {
    let exist = this.state.cartProduct.find((elm) => elm.id === product.id)
    if (exist.qty > 1) {
      let cart = this.state.cartProduct.map((elm) => elm.id === product.id ? { ...exist, qty: exist.qty - 1 } : elm)
      this.setState({ cartProduct: cart })
      this.addToLocalStorage(cart)
    }
  }

  deleteProduct = (product) => {
    let cart = this.state.cartProduct.filter((elm) => elm.id !== product.id)
    this.setState({ cartProduct: cart })
    this.addToLocalStorage(cart)
  }

  render() {
    let totalQty = this.state.cartProduct.reduce((x, y) => x + y.qty, 0)
    let totalPrice = this.state.cartProduct.reduce((x, y) => x + y.qty*y.price, 0)
    return (
      <>


        <Navbar totalPrice={totalPrice} totalQty={totalQty} />

        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-9">
              <Products addProduct={this.addProduct} />
            </div>
            <div className="col-md-3">
              <Cart deleteProduct={this.deleteProduct} removeProduct={this.removeProduct} addProduct={this.addProduct} cartProduct={this.state.cartProduct} />
            </div>
          </div>
        </div>

      </>
    );
  }
}

export default App;