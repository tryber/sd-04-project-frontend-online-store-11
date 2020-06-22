import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MainPage from './components/MainPage';
import Header from './components/Header';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" component={MainPage} />
        <Route path="/ShoppingCart" component={ShoppingCart} />

      </div>
    </Router>
  );
}


export default App;
