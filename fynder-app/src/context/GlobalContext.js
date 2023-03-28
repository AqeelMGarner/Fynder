import React, {useState, useEffect, useContext, useReducer, createContext} from "react";
const initialState = []
const GlobalContext = createContext()

export function ContextProvider({children}) {
    const [favorite, setFavorite] = useState("hello")
    const value = {favorite, setFavorite}
    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}
export function useFavorite() {
    const context = useContext(GlobalContext)
    return context
}