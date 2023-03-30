import React, { useState, useEffect, useContext, useReducer, createContext } from "react";
export const GlobalContext = createContext();
export const GlobalProvider = ({ children }) => {
    const [placesInfo, setPlacesInfo] = useState([]);
    const [topFive, setTopFive] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(prev => !prev);
    }

    return (
        <GlobalContext.Provider value={{ placesInfo, setPlacesInfo, topFive, setTopFive, sidebarOpen, toggleSidebar }}>
            {children}
        </GlobalContext.Provider >
    );
};