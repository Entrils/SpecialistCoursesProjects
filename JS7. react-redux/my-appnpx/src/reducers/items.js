import{
    ADD_BOOK_TO_BASKET,
    REMOVE_BOOK_FROM_BASKET,
} from '../action'

//store.dispatch({type: ADD_BOOK_TO_BASKET, id: "3"})
//store.dispatch({type: REMOVE_BOOK_FROM_BASKET, id: "3"})

export const items = function(state, action){
    let newState;
    switch (action.type) {
        case ADD_BOOK_TO_BASKET:
            newState = Object.assign({},state);
            if ( !(action.id in newState)){
                newState[action.id] = 0;
            }
            newState[action.id]++;
          return newState;
        case REMOVE_BOOK_FROM_BASKET:
            newState = {};
            for (let i in state){
                if (i !== action.id){
                    newState[i] = state[i];
                }
            }
          return newState;
        default:
          return state;
      }
}