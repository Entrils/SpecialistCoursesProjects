import './App.css';
import {Outlet, Link} from 'react-router-dom';
import { Fade } from './Fade.js';
import {useState} from 'react';
import {CSSTransition, SwitchTransition} from 'react-transition-group';
import {Motion, spring} from 'react-motion';

function App() {

  const [isIn, setisIn] = useState(true);
  const [isProp, setInProp] = useState(true);
  const [state, setState] = useState(false);

  return (
    <div className="App">
        <h1>Bookkeeper!</h1>

        <Motion defaultStyle={{x: 0}} style={{x: spring(10)}}>
      {value => <div>Проектов: {value.x.toFixed(2)}</div>}
      </Motion>

        <SwitchTransition>
     <CSSTransition
       key={state ? "Goodbye, world!" : "Hello, world!"}
       addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
       classNames='fade'
     >
       <button onClick={() => setState(state => !state)}>
         {state ? "Goodbye, world!" : "Hello, world!"}
       </button>
     </CSSTransition>
   </SwitchTransition>


        <CSSTransition in={isProp} timeout={2300} classNames="my">
          <div>
            Привет, мир! CSSTransition
          </div>
        </CSSTransition>

        <button onClick={()=>setInProp(!isProp)}> CSSTransition </button>
        <Fade in={isIn  }/>
        <button onClick={()=>setisIn(!isIn)}> Не нажимай </button>
        <nav>
          <Link to="/catalog">Каталог</Link> | {' '}
          <Link to="/basket">Корзина</Link> | {' '}
          <Link to="/about">О нас</Link>
        </nav>
        <Outlet />
    </div>
  );
}

export default App;
