import{
    CHANGE_AUTHOR,
    CHANGE_PRICE,
    CHANGE_TITLE
} from '../action'

//store.dispatch({type: CHANGE_AUTHOR, author: "John Doe"})
//store.dispatch({type: CHANGE_PRICE, title: "JS for 24 h"})
//store.dispatch({type: CHANGE_TITLE, price: "350"})

export const addBookForm = function(state, action){
    switch (action.type) {
        case CHANGE_AUTHOR:
          return{
            ...state,
            author: action.author
          };
          case CHANGE_PRICE:
          return{
            ...state,
            price: action.price
          };
          case CHANGE_TITLE:
          return{
            ...state,
            title: action.title
          };

        default:
          return state
      }
}