"use client"
import { getCookie, setCookie } from "cookies-next";
import { useContext, useEffect } from "react";
import MenuProvider from "./MenuContext"
import ThemeProvider from "./ThemeContext"
import { ThemeContext } from "./ThemeContext";

export default function ContextProvider({ children }: { children: React.ReactNode  }) {
  const { setTheme, setIsDarkMode } = useContext(ThemeContext)
  useEffect(() => {
    const colorScheme = getCookie("color-scheme") || ( window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light" )
    console.log(colorScheme);
    
    setCookie("color-scheme", colorScheme)
    setIsDarkMode(!!colorScheme)
    setTheme(colorScheme)
  }, [])



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


// ContextProvider.getInitialProps = async ({ctx}: any) => ({
//   colorScheme: getCookie('color-scheme', ctx) || 'n / a'
// })
