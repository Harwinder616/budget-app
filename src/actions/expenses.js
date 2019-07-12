import uuid from 'uuid';

export const addExpense=({description='',amount=0,note='',createdAt=0}={})=>{
    return{
        type:'ADD_EXPENSE',
        expense:{
            id:uuid(),
            description:description,
            amount:amount,
            note:note,

            createdAt:createdAt
        }
    }
}

export const changeExpense=(id,updates)=>{
    return {type:'CHANGE_EXPENSE',
        id,
        updates
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