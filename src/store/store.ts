import {combineReducers, configureStore} from "@reduxjs/toolkit";
import variableReducer from './reducers/VariableSlice'
import signatoryReducer from './reducers/SignatorySlice'

const rootReducer = combineReducers({
    variableReducer,
    signatoryReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
