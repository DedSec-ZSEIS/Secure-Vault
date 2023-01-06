"use client"
import Dashboard from "./dashboard"
import { useRouter } from "next/navigation"
import { useStateContext } from "../../contexts/ContextProvider"
import { useEffect } from "react"

export default function Layout({ children } : { children: React.ReactNode }) {
  const router = useRouter()
  const { userData } = useStateContext()


//  useEffect(() => {
//   if (!userData) {
//     router.push("/login")
//   }
//  }, [])

 

  return (
    <>
      {
        (userData) && <Dashboard>{children}</Dashboard>
      }
    </>
    
  )
}
