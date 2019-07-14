
import{createStore,combineReducers,applyMiddleware,compose} from 'redux';
import expensesReducer from '../reducers/expenses.js';
import filtersReducers from '../reducers/filters.js';
import thunk from 'redux-thunk'
const enhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store=createStore(combineReducers({   
    expenses:expensesReducer,
    filters:filtersReducers
}

), enhancers(applyMiddleware(thunk))
)
export default store;