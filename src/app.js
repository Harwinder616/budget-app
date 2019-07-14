import React from 'react';
import {changeText} from './actions/filters.js'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import Routes from './router/approuter';
import './styles/styles.scss'
import store from './store/configstore.js';
import 'normalize.css/normalize.css';
import {startsetExpenses }from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import './firebase/firebase';
import 'react-dates/lib/css/_datepicker.css';


const jsx=(
    <Provider store={store}>
        <Routes />
    </Provider>
)
ReactDOM.render(<p>loading...</p>,document.getElementById('app2'));

store.dispatch(startsetExpenses()).then(()=>{
    ReactDOM.render(jsx,document.getElementById('app2'));



})
   
