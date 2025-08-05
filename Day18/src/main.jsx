import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux'
// import store from './redux/store.js'
// import { store } from './Cart/redux/store.js'
import store from './Cart copy/redux/store.js'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  //Provider Component makes the Redux store available to all the components in the application
 <Provider store={store}> 
  <App/> 
 </Provider>
)
