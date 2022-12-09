"use client"
import { useState, createContext, useEffect,  } from "react"

interface IThemeContext {
  theme: string;
  setTheme: any;
}


export const ThemeContext = createContext({
// theme: (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? "dark" : "light",
// theme: "light",
theme: "dark"
} as IThemeContext)


export default function ThemeProvider({ children } : { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light")
  useEffect(() => {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(isDarkMode ? "dark" : "light")
  }, [])


  return (
    <>
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    </>
  )
}
