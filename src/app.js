import React from 'react';
import {changeText} from './actions/filters.js'

import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import Routes from './router/approuter';
import './styles/styles.scss'
import store from './store/configstore.js';


import 'normalize.css/normalize.css';
import {addExpense }from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';


 

store.dispatch(addExpense({description:'sagar-karan',amount:50,createdAt:10}));
store.dispatch(addExpense({description:'sagar',amount:5000,createdAt:100}));
store.dispatch(addExpense({description:'sagar-raja',amount:500,createdAt:10000000}));



    const state=store.getState();
const visibleExpenses=getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


const jsx=(
    <Provider store={store}>
        <Routes />
    </Provider>
)
   
    ReactDOM.render(jsx,document.getElementById('app2'));



    /*
        const one=store.dispatch(addExpense({description:'sagar-karan',amount:500000,createdAt:-100000}));
        const two=store.dispatch(addExpense({description:'saga',amount:5000,createdAt:-1000}));
       /* store.dispatch(changeExpense(two.expense.id,{amount:5080}));*/
    
        //store.dispatch(Startdate(0));
        //store.dispatch(Enddate(999))
    
       /*store.dispatch(sortbyAmount( ))*/
       // store.dispatch(sortbyDate())
    
    //store.dispatch(removeExpense({id:one.expense.id}));