import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware  from "redux-thunk"
import { headerReducer } from "../n2-reducers/header-reducer";
export type ReduxStateType = ReturnType<typeof reducersBatch>


export type reduxStoreType = typeof store
export  type reduxDispatchType = typeof  dispatch;

let  reducersBatch = combineReducers({
    headerReducer: headerReducer,

});


export  const  store = createStore(reducersBatch, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof reducersBatch>

// let state = store.getState()

let dispatch = store.dispatch



