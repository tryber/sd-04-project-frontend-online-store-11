import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import ProductDetail from './components/ProductDetail';
import Header from './components/Header';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Header />
        <Route path="/" component={MainPage} />
        <Route path="/ShoppingCart" component={ShoppingCart} />
        <Route path="/:id" component={ProductDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
