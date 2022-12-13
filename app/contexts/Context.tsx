"use client"
import { getCookie, setCookie } from "cookies-next";
import { useContext, useEffect } from "react";
import MenuProvider from "./MenuContext"
import ThemeProvider from "./ThemeContext"
import { ThemeContext } from "./ThemeContext";

export default function ContextProvider({ children }: { children: React.ReactNode  }) {
  const { setTheme, setIsDarkMode } = useContext(ThemeContext)
  useEffect(() => {
    const colorScheme = getCookie("color-scheme") || window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light"
    console.log(getCookie("color-scheme"));
    console.log(window.matchMedia);
    console.log(window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");
    
    
    //|| window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light" || "light"
    setCookie("color-scheme", colorScheme)

    console.log(getCookie('color-scheme'));
    console.log(colorScheme);
    console.log(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    console.log(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");
    
    
    
    setTheme(colorScheme)
    setIsDarkMode(!!colorScheme)



    // const isInDarkMode: boolean = props.colorScheme === "dark"
    // console.log(isInDarkMode);
    // console.log(props.colorScheme);
    
    
    // const modestring = isInDarkMode ? "dark" : "light"
    // setTheme(modestring)
    // setCookie("color-scheme", modestring)
    // setIsDarkMode(isInDarkMode)
  }, [setTheme, setIsDarkMode])
  
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


ContextProvider.getInitialProps = async ({ctx}: any) => ({
  colorScheme: getCookie('color-scheme', ctx) || 'n / a'
})
//ctx.req?.headers["color-scheme"] || window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light" || "light",