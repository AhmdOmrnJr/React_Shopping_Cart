import React, { Component } from 'react';

class Cart extends Component {
    render() {
        return (
            <>
                <h2 className='mt-5 pt-5'>Cart items</h2>
                {this.props.cartProduct.map((value, index) => {
                    return (
                        <div key={value.id}>
                            <div className=" cart-items text-center ">
                                <div className="cart-item d-flex text-center mt-2 pt-2">
                                    <div className="cart-image w-25">
                                        <img className='w-100' src={value.image} alt="" />
                                    </div>
                                    <div className="cart-body w-75 mt-3 ">
                                        <h6>{value.title}</h6>
                                        <p className='price'> ${value.price}</p>
                                        <button onClick={()=>{this.props.addProduct(value)}} className='btn btn-info me-1'>+</button>
                                        <span>{value.qty}</span>
                                        <button onClick={()=>{this.props.removeProduct(value)}} className='btn btn-danger ms-1'>-</button>
                                        <button onClick={()=>{this.props.deleteProduct(value)}} className='btn btn-danger ms-1'><i className='fas fa-trash'></i></button>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                    )
                })}
            </>
        );
    }
}

export default Cart;