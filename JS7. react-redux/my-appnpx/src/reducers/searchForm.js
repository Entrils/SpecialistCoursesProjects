import{
   CHANGE_SEARCH
} from '../action'

//store.dispatch({type:CHANGE_SEARCH, value: 'Book'})


export const searchForm = function(state = {}, action){
    switch (action.type) {
        case CHANGE_SEARCH:
            return{
                ...state,
                value: action.value
            };
        default:
          return state
      }
}