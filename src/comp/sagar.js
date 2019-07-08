import React from 'react';
import ConnectedExpenselist from './headerlist';
import Connectedlist from './expenseListfilter'

const sagar =()=>{
    return(
        <div>
            <Connectedlist />
            <ConnectedExpenselist />
        </div>
    )
}
export default sagar;