import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';


/* ПРИМЕР 1

import { createStore, combineReducers } from 'redux'

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}

function textReducer(state = { text: 0 }, action) {
  switch (action.type) {
    case 'text/add+':
      return { text: state.text + '+' }
    case 'text/add-':
      return { text: state.text + '-' }
    default:
      return state
  }
}

let store = createStore(combineReducers({counterReducer, textReducer}))

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'counter/incremented' })

store.dispatch({ type: 'counter/incremented' })

store.dispatch({ type: 'counter/decremented' })

store.dispatch({ type: 'text/add+'})
store.dispatch({ type: 'text/add+'})
store.dispatch({ type: 'text/add-'})*/


// ПРИМЕР 2 С ИПОТЕКОЙ

/*import { createStore, combineReducers } from 'redux'

function SReducer(state = 0 , action) {
  switch (action.type) {
    case 'set/s':
      return state + action.value
    default:
      return state
  }
}
function PReducer(state = 0 , action) {
  switch (action.type) {
    case 'set/p':
      return state + action.value
    default:
      return state
  }
}
function NReducer(state = 0 , action) {
  switch (action.type) {
    case 'set/n':
      return state + action.value
    default:
      return state
  }
}

let preloadedState = JSON.parse(localStorage.getItem('mortgage') ?? {S:1e6, P:7, N:10});
let store = createStore(combineReducers({S:SReducer, P:PReducer, N:NReducer}), preloadedState)

store.subscribe(() =>{
  console.log(store.getState())
  localStorage.setItem('mortgage', JSON.stringify(store.getState()));
})
store.dispatch({ type: 'set/s', value: 1_000_000})
store.dispatch({ type: 'set/p', value: 10})
store.dispatch({ type: 'set/n', value: 15})
setTimeout(()=>{store.dispatch({ type: 'set/s', value: 5_000_000})}, 5000)*/

import store from './storeFabric';
import{
  addBookToBasket,
  removeBookFromBasket,
  changeAuthor,
  changePrice,
  changeTitle,
  removeBook,
  addBook,
} from './actionCreators';


store.subscribe (() => {
  console.log (JSON.stringify(store.getState(), null, ' '));
})

store.dispatch(addBookToBasket(3));
store.dispatch(removeBookFromBasket(3));
store.dispatch(addBookToBasket(3));
store.dispatch(addBookToBasket(5));
/*store.dispatch({type: ADD_BOOK_TO_BASKET, id: "3"})
store.dispatch({type: ADD_BOOK_TO_BASKET, id: "3"})
store.dispatch({type: ADD_BOOK_TO_BASKET, id: "5"})
store.dispatch({type: REMOVE_BOOK_FROM_BASKET, id: "3"})*/

store.dispatch(changeAuthor('John Doe'));
store.dispatch(changeTitle('JS for 24h'));
store.dispatch(changePrice(350));
store.dispatch(addBook({
  id:100, 
  title: 'Mongo DB. Полное руководство', 
  author: 'Брэдшоу Шэннон', 
  price: 2000
}));
store.dispatch(addBook({
  id:101, 
  title: 'Профессиональный TypeScript', 
  author: 'Борис Черный', 
  price: 2000
}));
store.dispatch(removeBook(1));
/*store.dispatch({type: CHANGE_AUTHOR, author: "John Doe"})
store.dispatch({type: CHANGE_PRICE, title: "JS for 24 h"})
store.dispatch({type: CHANGE_TITLE, price: "350"})*/

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
