// Reducer => a function that takes in the old state, and an action => return new state

const contextReducer = (state, action) => {
    if(action.type === 'ADD_TRANSACTION') {
        const transactions = [...state, action.payload];
        
        localStorage.setItem('transactions', JSON.stringify(transactions))
        
        return transactions;
    } else if(action.type === 'DELETE_TRANSACTION') {
        const transactions = state.filter((t) => t.id !== action.payload);
        
        localStorage.setItem('transactions', JSON.stringify(transactions))
        
        return transactions;
    } else {
        return state;
    }
}

export default contextReducer;