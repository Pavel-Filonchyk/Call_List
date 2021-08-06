import {applyMiddleware, createStore, combineReducers} from 'redux';
import { reducer as formReducer } from "redux-form"
import thunkMiddleware from 'redux-thunk'
import mainReducer from './mainReducer';

const reducer = combineReducers({   
   form: formReducer,
   mainReducer
})
type ReducerType = typeof reducer      
export type AppType = ReturnType<ReducerType> 

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export default store
