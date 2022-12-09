"use client"
import { useState, createContext, useEffect,  } from "react"


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

  useEffect(() => {
    setTimeout(() => {
      const isInDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      setTheme(isInDarkMode ? "dark" : "light")
      setIsDarkMode(isInDarkMode)
    }, 300);
  }, [])


  return (
    <>
        <ThemeContext.Provider value={{ theme, setTheme, isDarkMode, setIsDarkMode }}>
            {children}
        </ThemeContext.Provider>
    </>
  )
}
