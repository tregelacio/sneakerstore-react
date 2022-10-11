import React, { Component } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart';
import Details from './components/Details';
import Default from './components/Default';
import ProductList from './components/ProductList';
import Navbar from './components/Navbar';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" component={ProductList} />
                    <Route path="/details" component={Details} />
                    <Route path="/cart" component={Cart} />
                    <Route component={Default} />
                </Routes>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;