"use client"
import Link from "next/link"
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import { useState } from "react";


export default function Navigator() {
    const [navigator, setNavigator] = useState(true)

  return (
    <>
        {navigator && <div className="w-full fixed z-20 flex justify-center items-center gap-2 bg-blue-500 text-white overflow-hidden">
            <Link href="/">Homepage</Link>
            <Link href="/login">Login</Link>
            <Link href="/dashboard">Dashboard</Link>
        </div>}
        <div className="fixed z-50 right-1 top-0 w-4 h-4 dark:text-white cursor-pointer" onClick={() => setNavigator(!navigator)}>
            <ArrowDropDownCircleIcon />
        </div>
    </>
  )
}
