"use client"
import { createContext, Dispatch, SetStateAction, useContext, useState, useEffect } from "react";


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

interface IStorage {
    (
        setTheme: Dispatch<SetStateAction<string>>,
        setIsDarkMode: Dispatch<SetStateAction<boolean>>,
        setUserData: Dispatch<SetStateAction<{
            email: string;
            uat: string;
        }>>
    ) : void
}
const storage: IStorage = (setTheme, setIsDarkMode, setUserData) => {
    const isThemeInStorage = localStorage.getItem('theme')
    const prefferedDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (isThemeInStorage) {
        if (isThemeInStorage === "dark") {
            setTheme("dark")
            setIsDarkMode(true)
        } else {
            setTheme("light")
            setIsDarkMode(false)
        }
    }
    else if (prefferedDarkScheme) {
        setTheme("dark")
        setIsDarkMode(true)
    }
    else {
        setTheme("light")
        setIsDarkMode(false)
    }

    const session = sessionStorage.getItem('session')

    if (session) {
        const { email, uat } = JSON.parse(session)
        setUserData({
            email,
            uat
        })
    }
}


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

    useEffect(()=> {
        storage(setTheme, setIsDarkMode, setUserData)
    }, [])

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
            <div className={`h-screen ${theme}`}>
                {children}
            </div>
        </StateContext.Provider>
    )
}






export default StateProvider;

export const useStateContext = () => useContext(StateContext);