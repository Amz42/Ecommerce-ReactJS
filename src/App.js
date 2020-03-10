import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route} from 'react-router-dom';

import Cart from './components/Cart';
import Default from './components/Default';
import Details from './components/Details';
import Navbar from './components/Navbar';
import Product from './components/Product';
import ProductList from './components/ProductList';


function App() {
  return (
    <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
    </React.Fragment>
  );
}

export default App;
