import './App.css';
//import Button from './components/Button.js';
import React from 'react';
import AddBookForm from './containers/AddBookForm.js';
import Basket from './containers/Basket.js';
import BookWithoutPrice from './components/BookWithoutPrice.js';
import Footer from './components/Footer.js';
import SearchForm from './containers/SearchForm.js';
import Book from './components/Book.js';
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';
import { Button } from 'reactstrap';

class App extends React.Component{

  render(){
    const book = this.props.dataBook.filter(
      item => item.title.toLowerCase().startsWith(this.props.SearchForm.value.toLowerCase())
    ). map( item => (                         
    item["price"] ?   <Book
    id={item["id"]}
    key={item["id"]}
    title={item["title"]}
    author={item["author"]}
    price={item["price"]}
    handleAddToBasket={this.props.AddBookToBasket}
    /> :
    <BookWithoutPrice
    key={item["id"]}
    title={item["title"]}
    author={item["author"]}
    price={item["price"]}
    />
    )
    )
    return <div>
      <Button color="danger">Danger!</Button>
      <Button color="success">Success!</Button>
      <Basket />
      <AddBookForm />
      <SearchForm />
     {book}
    </div>;
  }
}

export default App;
