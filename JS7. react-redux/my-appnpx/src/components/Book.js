import React from 'react';
class Book extends React.Component{
  render(){
   const price = this.props.price ? <strong>{this.props.price}</strong> : <del>&nbsp;</del>;
    return <div className={"book book-default" } >
    <h3>{this.props.title}</h3>
    <img src={'http://placehold.it/100x120?text='+this.props.title} alt="" />
    <p> Автор: {this.props.author}</p>
    <p> Цена: {price} руб.</p>
    <a href="#" onClick={() =>{alert(2)}} className="btn btn-success">Сравнить</a>&nbsp;
    <a href="#" onClick={(ev) =>{this.props.handleAddToBasket(this.props.id); ev.preventDefault()}} className="btn btn-success">В корзину</a>
    </div>;
  }
}
export default Book;
