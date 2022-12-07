'use client'
import { useEffect, useState } from "react"

export default function Header() {
    const [isInDarkmode, setIsInDarkmode] = useState(false)
    
    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // dark mode
            console.log('dark mode detected');
            setIsInDarkmode(true)
        }
    }, [])
    

// ${isInDarkmode ? "dark" : ""}  
    return (
        <div className="header bg-blue-700 flex items-center h-24 w-full shadow-lg relative text-white">
            {/* <div className="logo-wrapper m-10">
                CKMK
            </div> */}
            <div className="right-side-options m-10 flex gap-8 items-center absolute right-0">
                <div className="dark-mode-btn-div">
                <button>nightmode</button>
                </div>
                <div className="profile-avatar w-16 h-16 bg-black rounded-full p-2">
                <button>avatar</button>
                </div>
            </div>
        </div>
    )
}
