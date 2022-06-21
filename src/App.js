import './App.css';
import ItemsList from './components/ItemList/ItemsList';
import { useState } from "react"
import Header from './components/Header/Header';
import Total from './components/Total/Total';
import Checkout from './components/Checkout/Checkout';
import Thanks from './components/Thanks/Thanks';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  
  const [ cost, setCost ] = useState(0);

  return (
    <Router>
      <div>
        <Header />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <ItemsList cost={cost} setCost={setCost}/>
            <Total cost={cost}/>
            <Checkout />
          </Route>
          <Route exact path="/checkout">
            <Thanks />
          </Route>
        </Switch>
      </div>
      </div>
    </Router>
  );
}

export default App;
