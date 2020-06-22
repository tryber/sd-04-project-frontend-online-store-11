import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import ProductDetail from './components/ProductDetail';
import Header from './components/Header';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
    <Router>
      <div className="App">
        <Header />
        <Route path="/" component={MainPage} />
        <Route path="/ShoppingCart" component={ShoppingCart} />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/:id" component={ProductDetail} />
        </Switch>
      </div>
    </Router>
    </BrowserRouter>
  );
}

export default App;
