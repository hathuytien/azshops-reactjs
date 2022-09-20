// import thunk from 'redux-thunk';
import { combineReducers, compose } from 'redux';
import counter from '../store/manageProper'
import languageReducer from '../store/manageLanguage'
import productReducer from '../store/manageProduct'
import orderReducer from '../store/manageOrder'
import navReducer from '../store/nav'
import thunk from 'redux-thunk'
var redux = require('redux');

const allReducers = combineReducers({
  navReducer,
  counter,
  languageReducer,
  productReducer,
  orderReducer
  // add more reducers here
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = redux.legacy_createStore(allReducers, composeEnhancers(redux.applyMiddleware(thunk)));
// const store = redux.legacy_createStore(allReducers, redux.applyMiddleware(()=>{
//   return [ thunk.withExtraArgument({ $http: RestClient }) ];
// }));
export default store;
