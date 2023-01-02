'use client'
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

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
    
    userData: {
        email: string;
        uat: string;
    };
    setUserData: Dispatch<SetStateAction<{
        email: string;
        uat: string;
    }>>
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

    userData: {
        email: '',
        uat: '',
    },
    setUserData:() => {}


} as IStateContext






const StateContext = createContext(initialContext);

const StateProvider = ({ children } : { children: React.ReactNode } ) => {
    const [isUserProfileOpen, setIsUserProfileOpen] = useState(false);
    const [theme, setTheme] = useState("dark");
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);
    const [userData, setUserData] = useState({
        email: '',
        uat: '',
    });

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
        userData,
        setUserData,
    }

    return (
        <StateContext.Provider value={value}>
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider;

export const useStateContext = () => useContext(StateContext);