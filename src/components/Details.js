import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import { findAllByDisplayValue } from '@testing-library/react';


class Details extends Component{
    render() {
        return(
            <ProductConsumer>
                {(value)=>{
                    const {id,company,img,info,price,title,inCart} = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* Product Title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* Product Info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} className="img-fliud" alt="product" />
                                </div>
                                {/* Product Text */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model: {title}</h2>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by: 
                                        <span className="text-uppercase">
                                            {company}
                                        </span>
                                    </h4>
                                    <h4 className="text-blue">
                                        <strong>
                                            price: <span>$</span> {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        product description:
                                    </p>
                                    <p className="text-muted lead">
                                        {info}
                                    </p>
                                    {/* Buttons */}
                                    <div className="d-flex">
                                        <Link to="/">
                                            <button className="btn btn-warning">Back</button>
                                        </Link>
                                        <button 
                                            className="btn btn-primary ml-2"
                                            disabled={inCart ? true:false}
                                            onClick={()=>{
                                                value.addToCart(id);
                                            }}
                                        >
                                            {inCart ? "inCart":"Add to Cart"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </ProductConsumer>
        )
    }
}

export default Details;