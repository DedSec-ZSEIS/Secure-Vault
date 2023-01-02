'use client'
import { createContext, useContext, useState, useEffect } from "react";
import { useDarkMode } from "usehooks-ts";

interface IStateContext {
    isUserProfileOpen: boolean;
    setIsUserProfileOpen: (value: boolean) => void;

    theme: string;
    setTheme: (value: string) => void;

    isMenuOpen: boolean;
    setIsMenuOpen: (value: boolean) => void;

    isAdmin: boolean;
    setIsAdmin: (value: boolean) => void;

    // isDarkMode: boolean;
    // toggle: () => void;
}


const initialContext = {
    isUserProfileOpen: false,
    setIsUserProfileOpen: () => {},

    theme: "dark",
    setTheme: () => {},

    isMenuOpen: false,
    setIsMenuOpen: () => {},

    isAdmin: false,
    setIsAdmin: () => {},

    // isDarkMode: true,
    // toggle: () => {}


} as IStateContext






const StateContext = createContext(initialContext);

const StateProvider = ({ children } : { children: React.ReactNode } ) => {
    const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);
    const [theme, setTheme] = useState("dark");
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    // const { isDarkMode, toggle } = useDarkMode();

    // useEffect(() => {
    //     setTheme(isDarkMode ? "dark" : "light");
    // }, [isDarkMode])

    const value = {
        isUserProfileOpen,
        setIsUserProfileOpen,
        theme,
        setTheme,
        isMenuOpen,
        setIsMenuOpen,
        isAdmin,
        setIsAdmin,
        // isDarkMode,
        // toggle
    }

    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider;

export const useStateContext = () => useContext(StateContext);