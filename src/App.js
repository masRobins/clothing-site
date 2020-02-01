import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import HomePage from './pages/clothing-site-homepage/jsx/_homepage'
import ShopPage from './pages/clothing-site-homepage/jsx/_shopping-page'

const HatsPage = () => (
  <div>
    Hats Page
  </div>
);
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
