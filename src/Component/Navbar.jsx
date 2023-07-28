import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <>

                <nav class="navbar navbar-expand-lg navbar-dark main-color py-3">
                    <div className="container">
                        <div>
                            <a className="navbar-brand" href="#">AppStore</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">


                            <ul className="navbar-nav ms-auto text-white cart">
                                <li className="nav-item position-relative">
                                    <span>${this.props.totalPrice.toFixed(2)}</span>
                                    <span>Cart <i className='fas fa-shopping-cart'></i></span>
                                    <span  className="badge badge-info p-2 amount">{this.props.totalQty}</span>
                                </li>
                            </ul>

                        </div >
                    </div>
                </nav>


            </>
        );
    }
}

export default Navbar;



