import thunkMiddleware from 'redux-thunk'
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {loginReducer} from "./loginReducer";
import {passwordCreationReducer} from "./passwordCreationReducer";
import {passwordRecoveryReducer} from "./passwordRecoveryReducer";
import {registrationReducer} from "./registrationReducer";
import {profileReducer} from "./profileReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";


const rootReducer = combineReducers({
    login: loginReducer,
    passCreation: passwordCreationReducer,
    passRecovery: passwordRecoveryReducer,
    profile: profileReducer,
    registration: registrationReducer,
})


export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector


// @ts-ignore
window.store = store;
