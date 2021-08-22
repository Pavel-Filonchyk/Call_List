import {applyMiddleware, createStore, combineReducers} from 'redux'
import { reducer as formReducer } from "redux-form"
import thunkMiddleware from 'redux-thunk'
import mainReducer from './mainReducer'

const reducer = combineReducers({   
   form: formReducer,
   mainReducer
})

type ReducerType = typeof reducer      
export type AppType = ReturnType<ReducerType> 

type PropertiesType<T> = T extends {[key: string]: infer U} ? U : any 
export type InferActionTypes<T extends {[key: string]: (...arg: any[]) => any}> = ReturnType<PropertiesType<T>>

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
export default store
