import { PayloadAction, combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import createWebStorage from "redux-persist/lib/storage/createWebStorage"
import storage from "redux-persist/es/storage"
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";

const createNoopStorage = () => {
    return {
        getItem(_key: string) {
            return Promise.resolve("null")
        },
        setItem(_key: string, value: string) {
            return Promise.resolve(value);
        },
        removeItcem(_key: string) {
            return Promise.resolve("null");
        }
    }
}

// const storage = typeof window !== "undefined"? createWebStorage("local"): createNoopStorage();

import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";

const persistConfig = {
    key: 'root',
    storage,
}

const appReducer = combineReducers({
    auth: authReducer,
    user: userReducer
})

const persistedReducer = persistReducer(persistConfig, appReducer)

const rootReducer = (state: any, action: PayloadAction) => {
    if(action.type === 'RESET') {
        localStorage.removeItem('persist:root')
        return appReducer(undefined, action)
    }
    return persistedReducer(state, action)
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        });
    }
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch