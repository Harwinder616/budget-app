
import{createStore,combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses.js';
import filtersReducers from '../reducers/filters.js';

const store=createStore(combineReducers({   
    expenses:expensesReducer,
    filters:filtersReducers
}

), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default store;