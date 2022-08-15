// import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import counter from '../store/manageProper'
import thunk from 'redux-thunk'
var redux = require('redux');

const allReducers = combineReducers({
  counter,
  
  // add more reducers here
});

const store = redux.legacy_createStore(allReducers, redux.applyMiddleware(thunk));
// const store = redux.legacy_createStore(allReducers, redux.applyMiddleware(()=>{
//   return [ thunk.withExtraArgument({ $http: RestClient }) ];
// }));
export default store;