import { createStore, combineReducers } from 'redux'

import {items} from './reducers/items';
import {addBookForm} from './reducers/addBookForm';
import {dataBook} from './reducers/dataBook';
import {searchForm} from './reducers/searchForm';

//import dataBook from './components/data';
//import dataBook from './components/data.json';
import initialState from './initialState';

const store = createStore(combineReducers({
    items,
    addBookForm,
    dataBook,
    searchForm,
}), initialState);

export default store;