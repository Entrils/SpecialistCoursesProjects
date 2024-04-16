import './App.css';
import Button from './components/Button.js'
import List from './components/List.js'

function App() {

  const buttons = [
    {value: 'Кнопка1', fn: ()=> console.log(1)},
    {value: 'Кнопка2', fn: ()=> console.log(2)},
    {value: 'Кнопка3', fn: ()=> console.log(3)},
    {value: 'Кнопка4', fn: ()=> console.log(4)},
  ]

  const ingredients = [
    'Мука',
    'Дрожжи',
    'Тёплая вода'
  ]

  return (
    <div className="App">
      <header className="App-header">
        <h1>Привет, мир!</h1>  
        <div>
          <Button value={'Моя кнопка!'}  onClickHandler={()=>alert('Ура!')} />
          <Button value={'JS'}  onClickHandler={()=>alert('JS')} />
          <Button value={'React.js'}  onClickHandler={()=>alert('React.js')} />
        </div>

        <div>
          {buttons.map( (button, index) => (
            <Button
              value={button.value}
              onClickHandler={button.fn}
              key={index}
            />
          ) )}
        </div>

        <section>
          <h2>Состав:</h2>
          <List items={ingredients} />
        </section>
      </header>
    </div>
  );
}

export default App;