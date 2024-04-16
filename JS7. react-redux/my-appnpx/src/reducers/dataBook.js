import{
    ADD_BOOK,
    REMOVE_BOOK
} from '../action'

//store.dispatch({type: ADD_BOOK, {id:100, title: '', author:'',price:1000}}})
//store.dispatch({type: ADD_BOOK, book})
//store.dispatch({type: REMOVE_BOOK, id: "3"})

export const dataBook = function(state = {}, action){
    switch (action.type) {
        case ADD_BOOK:
            return[
                ...state,
                action.book
            ];
        case REMOVE_BOOK:
          return state.filter(
            (book) =>  book.id !== action.id 
          );
        default:
          return state
      }
}