
import database from '../firebase/firebase'

export const addExpense=(expense)=>{
    return{
        type:'ADD_EXPENSE',
        expense
    }
}
export const startaddExpense=(expenseData={})=>{
    return (dispatch)=>{
        const{description='',
        amount=0,
        note='',
        createdAt=0}=expenseData
        const expense={description,amount,note,createdAt}
        database.ref('expenses').push(expense).then((ref)=>{
            dispatch(addExpense({
                id:ref.key,...expense
            }))
        })
    }
    
}


export const changeExpense=(id,updates)=>{
    return {type:'CHANGE_EXPENSE',
        id,
        updates
    }
}

export const startchangeExpense=(id,updates)=>{
    return (dispatch)=>{
        return database.ref('expenses'+id).update(updates).then(()=>{
            dispatch (changeExpense(id,updates))
        })

        }
    }



export const totalExpense=()=>{
    return {
        type:'TOTAL_EXPENSE'
    }
}
export const removeExpense=({id}={})=>{
    return{
        type:'REMOVE_EXPENSE',
    id:id

    }
}

export const startremoveExpense=({id}={})=>{

    return (dispatch)=>{
        return database.ref('expenses/'+id).remove().then(()=>{
            dispatch(removeExpense({id}))

        })

    }


}

export const setexpenses=(expenses)=>{

return{
    type:'SET_EXPENSE',
    expenses
}

}

 export const startsetExpenses=()=>{
    return(dispatch)=>{
   return database.ref('expenses').once('value').then((snapshot)=>{
        const expenses=[];
        snapshot.forEach((child)=>{
          expenses.push({
            id:child.key,
            ...child.val()
          })
    
        })
        dispatch(setexpenses(expenses))
      })
    }
    
}
