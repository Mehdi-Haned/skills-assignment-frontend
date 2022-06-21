import './App.css';
import React from 'react'
import ItemsList from './components/ItemList/ItemsList';
import { useState } from "react"
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const [ cost, setCost ] = useState(0);

  return (
    <div>
      <Header/>
    <div className="App">
          <table><ItemsList cost={cost} setCost={setCost}/></table>
          <h2>Cost: {cost.toFixed(2)}$</h2>
    </div>
    <Footer/>
    </div>
  );
}

export default App;
