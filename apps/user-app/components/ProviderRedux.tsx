"use client"
import React from 'react'
import { store } from "@repo/stores/store";
import { Provider } from 'react-redux';

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
