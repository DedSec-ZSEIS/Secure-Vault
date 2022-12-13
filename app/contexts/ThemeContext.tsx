"use client"
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
} as IThemeContext)


export default function ThemeProvider({ children } : { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light")
  const [isDarkMode, setIsDarkMode] = useState(true)



  return (
    <>
        <ThemeContext.Provider value={{ theme, setTheme, isDarkMode, setIsDarkMode }}>
            {children}
        </ThemeContext.Provider>
    </>
  )
}


