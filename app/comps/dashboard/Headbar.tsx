'use client'
import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { FaBeer } from 'react-icons/fa';


export default function Headbar() {
    const { theme, setTheme } = useContext(ThemeContext)
    
    // useEffect(() => {
    //     if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //         // dark mode
    //         console.log('dark mode detected');
    //     }
    // }, [])
    
    const handleClick = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

// ${isInDarkmode ? "dark" : ""}  
    return (
        <div className={`headbar bg-blue-700 flex items-center h-24 w-full shadow-lg relative text-white dark:text-black`}  style={{ gridArea: "headbar" }}>
            {/* <div className="logo-wrapper m-10">
                CKMK
            </div> */}
            <div className="right-side-options m-10 flex gap-8 items-center absolute right-0">
                <div className="dark-mode-btn-div">
                <button onClick={handleClick}>
                    <FaBeer />
                </button>
                </div>
                <div className="profile-avatar w-16 h-16 bg-black rounded-full p-2">
                <button>avatar</button>
                </div>
            </div>
        </div>
    )
}
