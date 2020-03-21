import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App'
import {createStore} from 'redux';
import reducer from './Reducers'
import {Provider} from  'react-redux'

const ReduxStore = createStore(reducer)

ReactDOM.render(
<Provider store ={ReduxStore}>
<App />
</Provider>,document.querySelector('#root'))