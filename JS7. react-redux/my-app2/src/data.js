const dataBook = [
  {id:1, title:"Book 1", author:"Author 1", price: 500},
  {id:5, title:"Book 2", author:"Author 2", price: 1200},
  {id:6, title:"Book 3", author:"Author 3", price: null},
  {id:7, title:"JS 1", author:"Author 3", price: null},
  {id:8, title:"JS 2", author:"Author 3", price: null},
];

export default dataBook;

export function getBook(idbook){
  return dataBook.find(
    book => book.id == idbook
  )
}