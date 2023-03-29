import React, { useState, useEffect, useContext, useReducer, createContext } from "react";
// const initialState = []
// const GlobalContext = createContext()

// export function ContextProvider({children}) {
//     const [favorite, setFavorite] = useState("hello")
//     const value = {favorite, setFavorite}
//     return (
//         <GlobalContext.Provider value={value}>
//             {children}
//         </GlobalContext.Provider>
//     )
// }
// export function useFavorite() {
//     const context = useContext(GlobalContext)
//     return context
// }



export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [placesInfo, setPlacesInfo] = useState([]);
    const [topFive, setTopFive] = useState([]);
    const sidebarContext = React.createContext({
        sidebarOpen: false,
        toggleSidebar: () => { },
    });


    return (
        <GlobalContext.Provider value={{ placesInfo, setPlacesInfo, topFive, setTopFive, sidebarContext }}>
            {children}
        </GlobalContext.Provider >
    );
};
