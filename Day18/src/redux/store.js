import {createStore} from 'redux'
import counterReducer from './counterReducer'


const store = createStore(counterReducer); //passing counterReducer inside store


export default store;