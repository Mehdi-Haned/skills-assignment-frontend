import './App.css';
import ItemsList from './components/ItemList/ItemsList';
import { useState } from "react"
import Header from './components/Header/Header';

function App() {
  const [ cost, setCost ] = useState(0);

  return (
    <div>
      <Header/>
    <div className="App">
          <ItemsList cost={cost} setCost={setCost}/>
          <h2>Cost:</h2>
          <div>{cost.toFixed(2)}$</div>
    </div>
    </div>
  );
}

export default App;
