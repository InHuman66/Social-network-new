import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware  from "redux-thunk"
import { authReducer } from "../n2-reducers/auth-reducer";
import { headerReducer } from "../n2-reducers/header-reducer";
import { profileReducer } from "../n2-reducers/profile-reducer";
import { usersReducer } from "../n2-reducers/users-reducer";
export type ReduxStateType = ReturnType<typeof reducersBatch>


export type reduxStoreType = typeof store
export  type reduxDispatchType = typeof  dispatch;

let  reducersBatch = combineReducers({
    headerReducer: headerReducer,
    usersReducer: usersReducer,
    profileReducer:profileReducer,
    authReducer:authReducer,
});


export  const  store = createStore(reducersBatch, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof reducersBatch>

// let state = store.getState()

let dispatch = store.dispatch



