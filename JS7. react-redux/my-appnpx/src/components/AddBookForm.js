import React from 'react';
import { v4 as uuidv4} from 'uuid';

class AddBookForm extends React.Component{
 
 constructor(props){
     super(props);
    
     
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleChange = this.handleChange.bind(this);
  }
 
 
  isValidBook(book){
   return book.title.trim() && book.author.trim() ;
  }
 //https://vk.com/jsspec
  handleSubmit(ev){
   ev.preventDefault();
   let id = uuidv4();
   let title = this.props.title;
   let price = this.props.price;
   let author = this.props.author;

   let book = {id,title,price,author};
   if(this.isValidBook(book)){
    this.props.addBook(book);
   }else{
    alert('поля заполнены некорректно');
   }
  } 
  handleChange(ev){
   ev.preventDefault();
   //console.log(ev.target)
   switch(ev.target.name){
    case 'title':
      this.props.changeTitle(ev.target.value)
      break;
      case 'author':
        this.props.changeAuthor(ev.target.value)
        break;
        case 'price':
          this.props.changePrice(ev.target.value)
          break;
   }
  }
 
  render(){
   return <form action="" onSubmit={this.handleSubmit} className="addbookform">
 <h3>Добавление книги</h3>     
 <div><label>id</label> <input type="text" name="id" onChange={this.handleChange} value={this.props.id} autoComplete="off" /></div>
 <div><label>Название</label> <input type="text" name="title"  onChange={this.handleChange} value={this.props.title} autoComplete="off" /></div>
 <div><label>Авторы</label> <input type="text" name="author"  onChange={this.handleChange} value={this.props.author} autoComplete="off"/></div>
 <div><label>Цена</label> <input type="text" name="price"  onChange={this.handleChange} value={this.props.price} autoComplete="off"/></div>
 <div><input type="submit" value="Добавить" className="btn btn-success"/></div>
</form>;

   
  }
}
export default AddBookForm;