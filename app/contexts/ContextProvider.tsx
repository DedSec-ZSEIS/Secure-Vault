'use client'
import { createContext, useContext, useState } from "react";

interface IStateContext {
    isUserProfileOpen: boolean;
    setIsUserProfileOpen: (value: boolean) => void;

    theme: string;
    setTheme: (value: string) => void;

    isDarkMode: boolean;
    setIsDarkMode: (value: boolean) => void | ((value: (value: boolean) => boolean) => void);

    isMenuOpen: boolean;
    setIsMenuOpen: (value: boolean) => void;

    isAdmin: boolean;
    setIsAdmin: (value: boolean) => void;
}


const initialContext = {
    isUserProfileOpen: false,
    setIsUserProfileOpen: () => {},

    theme: "dark",
    setTheme: () => {},

    isDarkMode: true,
    setIsDarkMode: () => {},

    isMenuOpen: false,
    setIsMenuOpen: () => {},

    isAdmin: false,
    setIsAdmin: () => {},


} as IStateContext






const StateContext = createContext(initialContext);

const StateProvider = ({ children } : { children: React.ReactNode } ) => {
    const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);
    const [theme, setTheme] = useState("dark");
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    const value = {
        isUserProfileOpen,
        setIsUserProfileOpen,
        theme,
        setTheme,
        isDarkMode,
        setIsDarkMode,
        isMenuOpen,
        setIsMenuOpen,
        isAdmin,
        setIsAdmin,
    }

    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider;

export const useStateContext = () => useContext(StateContext);