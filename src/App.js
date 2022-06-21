import './App.css';
import ItemsList from './components/ItemList/ItemsList';
import { useState } from "react"
import Header from './components/Header/Header';
import Total from './components/Total/Total';

function App() {
  
  const [ cost, setCost ] = useState(0);

  return (
    <div>
      <Header />
    <div className="App">
          <ItemsList cost={cost} setCost={setCost}/>
          <Total cost={cost}/>
    </div>
    </div>
  );
}

export default App;
