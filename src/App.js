import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import HomePage from './pages/clothing-site-homepage/jsx/_homepage'
import ShopPage from './pages/clothing-site-homepage/jsx/_shopping-page'
import Header from './components/clothing-site-components/global/_header.jsx'

const HatsPage = () => (
  <div>
    Hats Page
  </div>
);
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
