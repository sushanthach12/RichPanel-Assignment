"use client"

import { store } from "@/redux/store"
import { FC } from "react"
import { Provider } from "react-redux"
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"

interface ReduxProviderProps {
    children: React.ReactNode
}

const ReduxProvider: FC<ReduxProviderProps> = ({ children }) => {
    const persistor = persistStore(store)

    return <Provider store={store}>
        <PersistGate persistor={persistor}>
            {children}
        </PersistGate>
    </Provider>
}

export default ReduxProvider;