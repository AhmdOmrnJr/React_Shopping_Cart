import React, { Component } from 'react';
import data from "../store.js"

class Products extends Component {

    // const [image, title, description, price, category, id] = value

    render() {
        return (
            <>
                <div className="row text-center mt-5 pt-5">
                    {data.map((value, index) => {
                        return (
                            <div key={value.id} className="col-md-4 mt-4">
                                <div className="item">
                                    <img height="350px" className='w-100' src={value.image} alt="product_img" />
                                    <h6 className='py-4 title-height'>{value.title}</h6>
                                    <span>${value.price}</span>
                                    <br />
                                    <button onClick={()=>{this.props.addProduct(value)}} className='my-2 btn btn-info main-color text-white w-100'>Add to cart</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>
        );
    }
}

export default Products;