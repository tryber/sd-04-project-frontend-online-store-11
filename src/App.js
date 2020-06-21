import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/:id" component={ProductDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
