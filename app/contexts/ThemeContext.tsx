"use client"
import { getCookie } from "cookies-next";
import { useState, createContext  } from "react"


interface IThemeContext {
  theme: string;
  setTheme: any;
  isDarkMode: boolean;
  setIsDarkMode: any;
}


export const ThemeContext = createContext({
  theme: "dark",
  isDarkMode: true,
  setTheme: () => {},
  setIsDarkMode: () => {},
} as IThemeContext )


export default function ThemeProvider({ children } : { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light")
  const [isDarkMode, setIsDarkMode] = useState(true)
  console.log('Cookie: ' + getCookie("color-scheme"));



  return (
    <>
        <ThemeContext.Provider value={{ theme, setTheme, isDarkMode, setIsDarkMode }}>
            {children}
        </ThemeContext.Provider>
    </>
  )
}


