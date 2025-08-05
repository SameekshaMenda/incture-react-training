import { createStore, combineReducers } from 'redux';
import cartReducer from './reducer';

const combineReducer = combineReducers({
  cartReducer,
});

const store = createStore(combineReducer);
export default store;