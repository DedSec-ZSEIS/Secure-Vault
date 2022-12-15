"use client"
import { useState, createContext,  } from "react"


interface IMenuContext {
    isMenuOpen: boolean;
    setIsMenuOpen: any;
}


export const MenuContext = createContext({
    isMenuOpen: true,
    setIsMenuOpen: () => {},
} as IMenuContext)


export default function MenuProvider({ children } : { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(true)

  return (
    <>
        <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
            {children}
        </MenuContext.Provider>
    </>
  )
}
