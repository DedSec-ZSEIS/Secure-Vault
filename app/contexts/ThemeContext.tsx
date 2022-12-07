"use client"
import { useState, useContext, createContext } from "react"

const ThemeContext = createContext(true)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [darkTheme, setDarkTheme] = useState(true)

    // const toggleTheme = () => {
    //     setDarkTheme(prevDarkTheme => !prevDarkTheme)
    // }

  return (
    <>
        <ThemeContext.Provider value={darkTheme}>
            {children}
        </ThemeContext.Provider>
    </>
  )
}
