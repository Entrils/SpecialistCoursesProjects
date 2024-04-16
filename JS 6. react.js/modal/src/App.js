import "./App.css";
import React, {useState, useEffect} from 'react';
import Basket from "./components/Basket.js";
import Button from "./components/Button.js";
import Modal from "./components/Modal.js";
import Clicker from './components/Clicker'

function App() {

  const [startItems, setStartItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [isShow, setIsShow] = useState(false);
  const [name, setName] = useState('Гость');

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


  const modal = <Modal
    title="Модальное окно"
    children={
      <div>
        <p>Это диалоговое окно</p> 
        <input         
          value={name}
          onChange={ev => setName(ev.target.value)} 
          className="Modal-input-text"
         />
      </div>
    }
    buttons={<Button 
      value="Закрыть"
      onClickHandler={() => setIsShow(false)}
      />}
  />

  return (
    <div className="App">
      <header className="App-header">

      <Button
        value="Показать модальное окно"
        onClickHandler={() => setIsShow(true)}
     
      />
        <h1>Корзина: {name}</h1>
        
        {basketPlace}
      </header>

      { isShow ? modal : null }
    </div>
  );
}

export default App;
