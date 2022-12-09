"use client"
import MenuProvider from "./MenuContext"
import ThemeProvider from "./ThemeContext"

export default function ContextProvider({ children } : { children: React.ReactNode }) {
  
  return (
    <>
        <ThemeProvider>
            <MenuProvider>
                {children}
            </MenuProvider>
        </ThemeProvider>
    </>
  )
}
