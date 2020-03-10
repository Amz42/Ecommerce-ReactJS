import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary px-sm-5">
                <Link to="/">
                    <img src={logo} alt="home" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <button className="btn btn-outline-warning">Cart</button>
                </Link>
            </nav>
        )
    }
}

export default Navbar;