import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import ItemsList from './components/ItemList/ItemsList';
import Header from './components/Header/Header';
import Total from './components/Total/Total';
import Checkout from './components/Checkout/Checkout';
import Thanks from './components/Thanks/Thanks';
import Footer from './components/Footer/Footer';

function App() {
  
  const [ cost, setCost ] = useState(0);

  return (
    <Router>
      <div>
        <Header />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <h2>Items:</h2>
            <table><ItemsList cost={cost} setCost={setCost}/></table>
            <Total cost={cost}/>
            <Checkout />
          </Route>
          <Route exact path="/checkout">
            <Thanks />
          </Route>
        </Switch>
      </div>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
