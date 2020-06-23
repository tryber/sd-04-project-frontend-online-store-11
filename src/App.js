import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      <MainPage />
    </div>
  );
}

export default App;
