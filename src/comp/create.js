import React from 'react';
import ExpenseForm from './ExpenseForm'
import {addExpense} from '../actions/expenses'
import {connect} from'react-redux'

const create =(props)=>{

    return(
        
        <div>
           
        
            <h1>Add Expense</h1>
            <ExpenseForm  onSubmit={(expense)=>{
                props.dispatch(addExpense(expense))
                props.history.push('/')
            }}/>
            {state.expense.length||<p>no expenses</p>}
        
        </div>
    )
}
const convert=(state)=>{
    
        
    return {
        expenses:state.expense
    }
}

export default connect(convert)(create);