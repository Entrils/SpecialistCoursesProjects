import "./App.css";
import React, {useState, useEffect} from 'react';
import Basket from "./components/Basket.js";
import Clicker from './components/Clicker'

import {themes, ThemeContext} from './contexts/theme-context'

function App() {

  const [startItems, setStartItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [theme, setTheme] = useState(themes.light);

  useEffect(() => {
    fetch("http://localhost:3000/items.json")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setStartItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  
  let basketPlace = null;

  if (error) {
    basketPlace = <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    basketPlace = <div>Загрузка...</div>;
  } else {
    basketPlace = <Basket items={startItems} />
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Корзина</h1>
        
        <ThemeContext.Provider value={{theme, setTheme}}>
          {basketPlace}
        </ThemeContext.Provider>
      </header>
    </div>
  );
}

export default App;
