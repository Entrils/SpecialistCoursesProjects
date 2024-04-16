import './App.css';


const exp1 = <div className="some">2 + 3 = {2 + 3}</div>;

const date = new Date();
const odd = <div>нечётный</div>
const even = <div>чётный</div>
const result = date.getHours() % 2 ? odd : even

const imageURL = `https://placekitten.com/100/100`;
const image = <img  src={imageURL}   />;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Привет, мир!</h1>     
        {image}
        {exp1}
        {date.toLocaleTimeString()}
        {result}
      </header>
    </div>
  );
}

export default App;